import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutOrderItemsInput } from './recipe-ingredient-create-without-order-items.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutOrderItemsInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutOrderItemsInput)
    create!: RecipeIngredientCreateWithoutOrderItemsInput;
}
