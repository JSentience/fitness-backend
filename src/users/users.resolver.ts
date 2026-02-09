import { Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { UserProfileModel } from './models/user-profile.model'
import { currentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { UnauthorizedException } from '@nestjs/common'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}
	@Query(() => UserProfileModel, { name: 'profile' })
	@Auth()
	getProfile(@currentUser('id') id: string) {
		if (!id) {
			throw new UnauthorizedException('User not authenticated')
		}
		return this.usersService.findById(id)
	}

	// tests

	@Query(() => [UserProfileModel], { name: 'users' })
	@Auth(Role.ADMIN)
	getUsers() {
		return this.usersService.findAll()
	}
}

// Compare this snippet from Users/sergey-nasonov/Yandex.Disk.localized/HTML/red-group/red-winter/red-winter-backend/src/users/models/user-profile.model.ts:
// import { Field, ObjectType } from '@nestjs/graphql'
// import { Role } from 'prisma/generated/prisma/enums'
//
// @ObjectType()
// export class UserProfileModel {
// 	@Field()
// 	id: string
//
// 	@Field()
// 	email: string
//
// 	@Field(() => Role)
