import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/graphql/prisma'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { AdminRecipesService } from './admin-recipes.service'
import { RecipeCreateInput } from './inputs/recipe.input'
import { RecipeModel } from './models/recipes.model'
import { RecipesService } from './recipes.service'

@Resolver()
export class RecipesResolver {
	constructor(
		private readonly recipesService: RecipesService,
		private readonly adminRecipesService: AdminRecipesService,
	) {}

	@Query(() => RecipeModel, {
		name: 'recipes',
	})
	getAll() {
		return this.recipesService.getAll()
	}
	@Query(() => RecipeModel, {
		name: 'recipesBySlug',
	})
	getBySlug(@Args('slug') slug: string) {
		return this.recipesService.getBySlug(slug)
	}
	@Query(() => [RecipeModel], {
		name: 'admin-recipe',
	})
	@Auth(Role.ADMIN)
	getAllAdmin() {
		return this.adminRecipesService.getAll()
	}

	@Query(() => RecipeModel, {
		name: 'ingredientById',
	})
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.adminRecipesService.getById(id)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	createRecipe(
		@CurrentUser('id') authorId: string,
		@Args('input')
		input: RecipeCreateInput,
	) {
		return this.adminRecipesService.createRecipe(authorId, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	updateIngredient(
		@Args('id') id: string,
		@Args('input') input: RecipeCreateInput,
	) {
		return this.adminRecipesService.updateRecipe(id, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	deleteById(@Args('id') id: string) {
		return this.adminRecipesService.deleteRecipeById(id)
	}
}
