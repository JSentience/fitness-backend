import { Field, Float, InputType } from '@nestjs/graphql'
import { RecipeUpdateOneRequiredWithoutNutritionFactNestedInput } from '../recipe/recipe-update-one-required-without-nutrition-fact-nested.input'

@InputType()
export class NutritionFactUpdateInput {
	@Field(() => String, { nullable: true })
	id?: string

	@Field(() => Float, { nullable: true })
	proteins?: number

	@Field(() => Float, { nullable: true })
	fats?: number

	@Field(() => Float, { nullable: true })
	carbohydrates?: number

	@Field(() => Float, { nullable: true })
	fiber?: number

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string

	@Field(() => RecipeUpdateOneRequiredWithoutNutritionFactNestedInput, {
		nullable: true,
	})
	recipe?: RecipeUpdateOneRequiredWithoutNutritionFactNestedInput
}
