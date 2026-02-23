import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RecipeCreateInput } from './inputs/recipe.input'

@Injectable()
export class AdminRecipesService {
	constructor(private readonly prisma: PrismaService) {}

	//pagination filtering(category, searchTerm (name, description, ingredient)), sorting(default by date, recomended(likes), )
	getAll() {
		return this.prisma.recipe.findMany()
	}

	async getById(id: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { id },
			include: {
				recipeSteps: true,
				recipeIngredients: {
					include: {
						ingredient: true,
					},
				},
			},
		})
		if (!recipe) {
			throw new NotFoundException(`recipe with ${id} not found`)
		}
		return recipe
	}

	createRecipe(
		authorId: string,
		{
			recipeSteps,
			nutritionFact,
			ingredientsIds,
			tags,
			...data
		}: RecipeCreateInput,
	) {
		return this.prisma.recipe.create({
			data: {
				...data,
				author: {
					connect: { id: authorId },
				},
				...(nutritionFact && {
					nutritionFact: {
						create: nutritionFact,
					},
				}),
				recipeSteps: {
					create: recipeSteps,
				},

				...(!!ingredientsIds?.length && {
					recipeIngredients: {
						create: ingredientsIds.map((ingredientId, index) => ({
							ingredientId,
							quantity: 1,
							order: index,
						})),
					},
				}),
				...(tags && {
					tags: {
						connectOrCreate: tags.map(tagName => ({
							where: { name: tagName },
							create: { name: tagName },
						})),
					},
				}),
			},
		})
	}

	updateRecipe(
		id: string,
		{
			recipeSteps,
			nutritionFact,
			ingredientsIds,
			tags,
			...data
		}: RecipeCreateInput,
	) {
		return this.prisma.recipe.update({
			where: { id },
			data: {
				...data,
				...(nutritionFact && {
					nutritionFact: {
						upsert: {
							create: nutritionFact,
							update: nutritionFact,
						},
					},
				}),
				...(recipeSteps && {
					recipeSteps: {
						deleteMany: {},
						create: recipeSteps.map(step => ({
							order: step.order,
							title: step.title,
							description: step.description,
						})),
					},
				}),
				...(ingredientsIds && {
					recipeIngredients: {
						deleteMany: {},
						create: ingredientsIds.map((ingredientId, index) => ({
							ingredientId,
							quantity: 1,
							order: index,
						})),
					},
				}),
				...(tags && {
					tags: {
						set: [],
						connectOrCreate: tags.map(tagName => ({
							where: { name: tagName },
							create: { name: tagName },
						})),
					},
				}),
			},
		})
	}

	deleteRecipeById(id: string) {
		return this.prisma.recipe.delete({
			where: { id },
		})
	}
}
