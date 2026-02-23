import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutRecipeInput } from './recipe-ingredient-update-without-recipe.input';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';

@InputType()
export class RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutRecipeInput)
    update!: RecipeIngredientUpdateWithoutRecipeInput;

    @Field(() => RecipeIngredientCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create!: RecipeIngredientCreateWithoutRecipeInput;
}
