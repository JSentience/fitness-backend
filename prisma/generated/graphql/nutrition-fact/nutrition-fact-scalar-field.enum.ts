import { registerEnumType } from '@nestjs/graphql';

export enum NutritionFactScalarFieldEnum {
    id = "id",
    proteins = "proteins",
    fats = "fats",
    carbohydrates = "carbohydrates",
    fiber = "fiber",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(NutritionFactScalarFieldEnum, { name: 'NutritionFactScalarFieldEnum', description: undefined })
