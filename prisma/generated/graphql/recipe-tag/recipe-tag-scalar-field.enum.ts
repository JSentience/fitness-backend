import { registerEnumType } from '@nestjs/graphql';

export enum RecipeTagScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeTagScalarFieldEnum, { name: 'RecipeTagScalarFieldEnum', description: undefined })
