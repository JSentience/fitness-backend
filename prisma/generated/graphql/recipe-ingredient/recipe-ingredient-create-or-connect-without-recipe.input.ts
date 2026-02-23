import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create!: RecipeIngredientCreateWithoutRecipeInput;
}
