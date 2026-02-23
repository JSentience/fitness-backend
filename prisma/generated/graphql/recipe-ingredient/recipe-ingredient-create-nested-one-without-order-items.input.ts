import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutOrderItemsInput } from './recipe-ingredient-create-without-order-items.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutOrderItemsInput } from './recipe-ingredient-create-or-connect-without-order-items.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientCreateNestedOneWithoutOrderItemsInput {

    @Field(() => RecipeIngredientCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutOrderItemsInput)
    create?: RecipeIngredientCreateWithoutOrderItemsInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutOrderItemsInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;
}
