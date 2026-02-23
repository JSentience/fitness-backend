import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'prisma/generated/graphql/user'

export type TAuthTokenData = Pick<User, 'id' | 'role'>

export type TCurrentUser = Omit<User, 'password'>

export type TRequestWithUser = {
	user?: TCurrentUser
}

/* TODO: Codegen generate Models for graphql from Prisma to graphql */

@ObjectType()
export class AuthResponse {
	@Field(() => User)
	user: User

	@Field()
	accessToken: string
}
