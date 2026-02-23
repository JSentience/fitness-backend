import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined })
