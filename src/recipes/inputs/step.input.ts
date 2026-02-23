import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class RecipeStepInput {
	@Field(() => Int, { nullable: false })
	order!: number

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string
}
