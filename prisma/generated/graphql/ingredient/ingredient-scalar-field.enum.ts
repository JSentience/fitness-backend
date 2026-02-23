import { registerEnumType } from '@nestjs/graphql';

export enum IngredientScalarFieldEnum {
    id = "id",
    name = "name",
    iconUrl = "iconUrl",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(IngredientScalarFieldEnum, { name: 'IngredientScalarFieldEnum', description: undefined })
