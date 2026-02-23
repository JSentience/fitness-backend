import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutRecipeInput } from './comment-create-without-recipe.input';

@InputType()
export class CommentCreateOrConnectWithoutRecipeInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentCreateWithoutRecipeInput)
    create!: CommentCreateWithoutRecipeInput;
}
