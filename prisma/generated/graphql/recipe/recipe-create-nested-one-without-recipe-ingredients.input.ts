import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeIngredientsInput } from './recipe-create-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeIngredientsInput } from './recipe-create-or-connect-without-recipe-ingredients.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutRecipeIngredientsInput {

    @Field(() => RecipeCreateWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeIngredientsInput)
    create?: RecipeCreateWithoutRecipeIngredientsInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeIngredientsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeIngredientsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
