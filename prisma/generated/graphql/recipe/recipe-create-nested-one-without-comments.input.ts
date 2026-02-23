import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutCommentsInput } from './recipe-create-without-comments.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutCommentsInput } from './recipe-create-or-connect-without-comments.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutCommentsInput {

    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create?: RecipeCreateWithoutCommentsInput;

    @Field(() => RecipeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
