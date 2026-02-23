import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutIngredientInput } from './recipe-ingredient-update-without-ingredient.input';

@InputType()
export class RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientUpdateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutIngredientInput)
    data!: RecipeIngredientUpdateWithoutIngredientInput;
}
