import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutRecipeInput } from './comment-update-without-recipe.input';
import { CommentCreateWithoutRecipeInput } from './comment-create-without-recipe.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutRecipeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentUpdateWithoutRecipeInput)
    update!: CommentUpdateWithoutRecipeInput;

    @Field(() => CommentCreateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentCreateWithoutRecipeInput)
    create!: CommentCreateWithoutRecipeInput;
}
