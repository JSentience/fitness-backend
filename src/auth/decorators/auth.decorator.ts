import { applyDecorators, UseGuards } from '@nestjs/common'
import { Role } from 'prisma/generated/graphql/prisma/role.enum'
import { AdminGuard } from '../guards/admin.guard'
import { GqlAuthGuard } from '../guards/auth.guard'

export const Auth = (role: Role = Role.USER) => {
	if (role === Role.ADMIN) {
		return applyDecorators(UseGuards(GqlAuthGuard, AdminGuard))
	}

	return applyDecorators(UseGuards(GqlAuthGuard))
}
