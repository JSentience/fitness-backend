import { CanActivate } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import type { TRequestWithUser } from '../auth.interface'
import { Role } from 'prisma/generated/prisma/enums'
import { ExecutionContext } from '@nestjs/common'
import { ForbiddenError } from '@nestjs/apollo'

export class AdminGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context)
		const user = ctx.getContext<{ req: TRequestWithUser }>().req.user

		if (user?.role !== Role.ADMIN) {
			throw new ForbiddenError('Access denied: Admins only')
		}
		return true
	}
}
