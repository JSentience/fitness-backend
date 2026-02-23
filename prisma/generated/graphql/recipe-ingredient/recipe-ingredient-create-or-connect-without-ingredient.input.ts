import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutIngredientInput } from './recipe-ingredient-create-without-ingredient.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutIngredientInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientCreateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutIngredientInput)
    create!: RecipeIngredientCreateWithoutIngredientInput;
}
