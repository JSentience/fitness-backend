import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutIngredientInput } from './recipe-ingredient-update-without-ingredient.input';
import { RecipeIngredientCreateWithoutIngredientInput } from './recipe-ingredient-create-without-ingredient.input';

@InputType()
export class RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientUpdateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutIngredientInput)
    update!: RecipeIngredientUpdateWithoutIngredientInput;

    @Field(() => RecipeIngredientCreateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutIngredientInput)
    create!: RecipeIngredientCreateWithoutIngredientInput;
}
