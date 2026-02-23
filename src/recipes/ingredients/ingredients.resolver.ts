import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/graphql/prisma/role.enum'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { IngredientsService } from './ingredients.service'
import { IngredientCreateInput } from './inputs/create-ingredients.input'
import { IngredientModel } from './models/ingredient.model'

@Resolver()
export class IngredientsResolver {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Query(() => [IngredientModel])
	@Auth(Role.ADMIN)
	getAll() {
		return this.ingredientsService.getAll()
	}

	@Query(() => IngredientModel)
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.ingredientsService.getById(id)
	}
	@Mutation(() => IngredientModel)
	@Auth(Role.ADMIN)
	createIngredient(@Args('input') input: IngredientCreateInput) {
		return this.ingredientsService.createIngredient(input)
	}

	@Mutation(() => IngredientModel)
	@Auth(Role.ADMIN)
	updateIngredient(
		@Args('id') id: string,
		@Args('input') input: IngredientCreateInput,
	) {
		return this.ingredientsService.updateIngredient(id, input)
	}

	@Mutation(() => IngredientModel)
	@Auth(Role.ADMIN)
	deleteById(@Args('id') id: string) {
		return this.ingredientsService.deleteById(id)
	}
}

//get all ingredient

//create ingredient

//delete ingredient

//update ingredient
