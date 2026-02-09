import { applyDecorators, UseGuards } from '@nestjs/common'
import { Role } from 'prisma/generated/prisma/enums'
import { GqlAuthGuard } from '../guards/auth.guard'
import { AdminGuard } from '../guards/admin.guard'

export const Auth = (role: Role = Role.USER) => {
	if (role === Role.ADMIN) {
		return applyDecorators(UseGuards(GqlAuthGuard, AdminGuard))
	}
	return applyDecorators(UseGuards(GqlAuthGuard))
}
