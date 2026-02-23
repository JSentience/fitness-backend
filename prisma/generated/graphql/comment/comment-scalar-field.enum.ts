import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    content = "content",
    recipeId = "recipeId",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
