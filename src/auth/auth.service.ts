import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthInput } from './auth.input'
import { hash, verify } from 'argon2'
import { IAuthTokenData } from './auth.interface'
import { UsersService } from 'src/users/users.service'
import { Response } from 'express'
import { isDev } from 'src/utils/is-dev.util'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwt: JwtService,
		private usersService: UsersService,
	) {}

	private EXPIRE_DAY_REFRESH_TOKEN = 3
	private REFRESH_TOKEN_NAME = 'refreshToken'

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
			const user = await this.prisma.user.create({
				data: {
					email,
					password: await hash(input.password),
				},
			})
			const tokens = this.generateToken({
				id: user.id,
				role: user.role,
			})
			return { user, ...tokens }
		} catch (error) {
			throw new BadRequestException('Registration failed: ' + error)
		}
	}

	async login(input: AuthInput) {
		const user = await this._validateUser(input)
		const tokens = this.generateToken({
			id: user.id,
			role: user.role,
		})
		return { user, ...tokens }
	}

	private async _validateUser(input: AuthInput) {
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

	private generateToken(data: IAuthTokenData) {
		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})
		const refreshToken = this.jwt.sign(
			{ id: data.id },
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

					// expires.setDate(expires.getDate + this.EXPIRE_DAY_REFRESH_TOKEN)
				)
		response.cookie(this.REFRESH_TOKEN_NAME, token || '', {
			httpOnly: true,
			domain: 'localhost', //domain for production or localhost for dev from env
			expires: expiresIn,
			secure: true,
			sameSite: isDev(this.configService) ? 'none' : 'strict', // sameSite что бы куки работали на localhost через https
		})
	}
}
