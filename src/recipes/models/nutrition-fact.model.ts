import { Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { RecipeModel } from './recipes.model'

@ObjectType()
export class NutritionFactModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Float, { nullable: false })
	proteins!: number

	@Field(() => Float, { nullable: false })
	fats!: number

	@Field(() => Float, { nullable: false })
	carbohydrates!: number

	@Field(() => Float, { nullable: false })
	fiber!: number

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => RecipeModel, { nullable: false })
	recipe?: RecipeModel
}
