import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
import { Response } from 'express'
import { Role } from 'prisma/generated/graphql/prisma/role.enum'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersService } from 'src/users/users.service'
import { isDev } from 'src/utils/is-dev.util'
import { AuthInput } from './auth.input'
import { TAuthTokenData } from './auth.interface'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwt: JwtService,
		private usersService: UsersService,
	) {}

	private EXPIRE_DAY_REFRESH_TOKEN = 3
	REFRESH_TOKEN_NAME = 'refreshToken'

	async register(input: AuthInput) {
		try {
			const email = input.email.toLowerCase()
			const existingUser = await this.prisma.user.findFirst({
				where: {
					email: {
						equals: email,
						mode: 'insensitive',
					},
				},
			})

			if (existingUser) {
				throw new BadRequestException('User with this email already exists')
			}

			/* TODO: Move to user service */
			const user = await this.prisma.user.create({
				data: {
					email: email,
					password: await hash(input.password),
				},
			})

			const tokens = this.generateTokens({
				id: user.id,
				role: user.role as Role,
			})

			return { user, ...tokens }
		} catch (error) {
			throw new BadRequestException('Registration failed: ' + error)
		}
	}

	async login(input: AuthInput) {
		const user = await this.validateUser(input)

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role as Role,
		})

		return { user, ...tokens }
	}

	async getNewTokens(refreshToken: string) {
		const result =
			await this.jwt.verifyAsync<Pick<TAuthTokenData, 'id'>>(refreshToken)
		if (!result) throw new BadRequestException('Invalid refresh token')

		const user = await this.usersService.findById(result.id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role as Role,
		})

		return {
			user,
			...tokens,
		}
	}

	private async validateUser(input: AuthInput) {
		const email = input.email

		const user = await this.usersService.findByEmail(email)

		if (!user) {
			throw new NotFoundException('Invalid email or password')
		}

		const isPasswordValid = await verify(user.password, input.password)

		if (!isPasswordValid) {
			throw new NotFoundException('Invalid email or password')
		}

		return user
	}

	private generateTokens(data: TAuthTokenData) {
		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})

		const refreshToken = this.jwt.sign(
			{
				id: data.id,
			},
			{
				expiresIn: `${this.EXPIRE_DAY_REFRESH_TOKEN}d`,
			},
		)

		return { accessToken, refreshToken }
	}

	toggleRefreshTokenCookie(response: Response, token: string | null) {
		const isRemoveCookie = !token

		const expiresIn = isRemoveCookie
			? new Date(0)
			: new Date(
					Date.now() + this.EXPIRE_DAY_REFRESH_TOKEN * 24 * 60 * 60 * 1000,
				)

		// expires.setDate(expires.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

		response.cookie(this.REFRESH_TOKEN_NAME, token || '', {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			sameSite: isDev(this.configService) ? 'none' : 'strict',
			secure: true,
		})
	}
}
