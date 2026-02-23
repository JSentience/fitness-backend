import { registerEnumType } from '@nestjs/graphql';

export enum RecipeScalarFieldEnum {
    id = "id",
    slug = "slug",
    title = "title",
    description = "description",
    calories = "calories",
    cookingTime = "cookingTime",
    difficulty = "difficulty",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined })
