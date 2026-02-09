import { createParamDecorator, UnauthorizedException } from '@nestjs/common'
import { TCurrentUser, TRequestWithUser } from '../auth.interface'
import { GqlExecutionContext } from '@nestjs/graphql'

export const currentUser = createParamDecorator(
	(data: keyof TCurrentUser, ctx) => {
		let user: TCurrentUser | null | undefined = null

		if (ctx.getType() === 'http') {
			user = ctx.switchToHttp().getRequest<TRequestWithUser>().user
		} else {
			const context = GqlExecutionContext.create(ctx)
			user = context.getContext<{ req: TRequestWithUser }>().req.user
		}
		if (!user) {
			throw new UnauthorizedException('User not authenticated')
		}

		return data ? user[data] : user
	},
)

//@CurrentUser() decorator can be used in controller methods to access the currently authenticated user from the request object.
// For example:
// @Get('profile')
// getProfile(@CurrentUser() user: User) {
//     return user;
// }
