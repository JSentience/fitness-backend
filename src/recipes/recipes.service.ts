import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	//pagination filtering(category, searchTerm (name, description, ingredient)), sorting(default by date, recomended(likes), )
	//
	getAll() {
		return this.prisma.recipe.findMany()
	}

	async getBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
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
			throw new NotFoundException(`recipe with ${slug} not found`)
		}
	}
}
