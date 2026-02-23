import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'
import { IngredientCreateInput } from './inputs/create-ingredients.input'

@Injectable()
export class IngredientsService {
	constructor(private readonly prisma: PrismaService) {}

	getAll() {
		return this.prisma.ingredient.findMany()
	}

	getById(id: string) {
		return this.prisma.ingredient.findUnique({
			where: { id },
		})
	}

	createIngredient(data: IngredientCreateInput) {
		return this.prisma.ingredient.create({
			data,
		})
	}
	updateIngredient(id: string, data: IngredientCreateInput) {
		return this.prisma.ingredient.update({
			where: { id },
			data,
		})
	}

	deleteById(id: string) {
		return this.prisma.ingredient.delete({
			where: { id },
		})
	}
}
