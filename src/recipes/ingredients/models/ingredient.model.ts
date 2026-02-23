import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/graphql/prisma'
import { RecipeIngredient } from 'prisma/generated/graphql/recipe-ingredient'

@ObjectType()
export class IngredientModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Unit, { nullable: false })
	defaultUnit!: `${Unit}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [RecipeIngredient], { nullable: true })
	recipes?: Array<RecipeIngredient>
}
