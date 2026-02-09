import { Field, ObjectType } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'

export interface IAuthTokenData {
	id: string
	role: Role
}

export type TCurrentUser = Omit<UserModel, 'password'>

export type TRequestWithUser = { user?: TCurrentUser }

// TODO: Codegen generate Models for GraphQL from Prisma models to GraphQl
@ObjectType()
export class UserModel {
	@Field()
	id: string

	@Field()
	email: string

	@Field()
	role: Role
}

@ObjectType()
export class AuthResponse {
	@Field(() => UserModel)
	user: UserModel
	@Field()
	accessToken: string
}
