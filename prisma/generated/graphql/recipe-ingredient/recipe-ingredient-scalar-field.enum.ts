import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    quantity = "quantity",
    unit = "unit",
    recipeId = "recipeId",
    ingredientId = "ingredientId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
