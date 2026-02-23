import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'

import { BadRequestException } from '@nestjs/common'
import type { IGqlContext } from 'src/app.interface'
import { AuthInput } from './auth.input'
import { AuthResponse } from './auth.interface'
import { AuthService } from './auth.service'

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) {}

	/* TODO: Captcha */
	@Mutation(() => AuthResponse)
	async login(@Args('data') input: AuthInput, @Context() { res }: IGqlContext) {
		const { refreshToken, ...response } = await this.authService.login(input)

		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	/* TODO: Captcha */
	@Mutation(() => AuthResponse)
	async register(
		@Args('data') input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { refreshToken, ...response } = await this.authService.register(input)

		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Query(() => AuthResponse)
	async newTokens(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]

		if (!initialRefreshToken) {
			this.authService.toggleRefreshTokenCookie(res, null)
			throw new BadRequestException('Refresh token is missing')
		}

		const { refreshToken, ...response } =
			await this.authService.getNewTokens(initialRefreshToken)

		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => Boolean)
	logout(@Context() { res, req }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]

		if (!initialRefreshToken) {
			this.authService.toggleRefreshTokenCookie(res, null)
			throw new BadRequestException('Refresh token is missing')
		}

		this.authService.toggleRefreshTokenCookie(res, null)

		return true
	}
}
