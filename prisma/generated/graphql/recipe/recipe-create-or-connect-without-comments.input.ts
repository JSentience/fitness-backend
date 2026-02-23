import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutCommentsInput } from './recipe-create-without-comments.input';

@InputType()
export class RecipeCreateOrConnectWithoutCommentsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create!: RecipeCreateWithoutCommentsInput;
}
