import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutOrderItemsInput } from './recipe-ingredient-create-without-order-items.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutOrderItemsInput } from './recipe-ingredient-create-or-connect-without-order-items.input';
import { RecipeIngredientUpsertWithoutOrderItemsInput } from './recipe-ingredient-upsert-without-order-items.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateToOneWithWhereWithoutOrderItemsInput } from './recipe-ingredient-update-to-one-with-where-without-order-items.input';

@InputType()
export class RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput {

    @Field(() => RecipeIngredientCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutOrderItemsInput)
    create?: RecipeIngredientCreateWithoutOrderItemsInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutOrderItemsInput;

    @Field(() => RecipeIngredientUpsertWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientUpsertWithoutOrderItemsInput)
    upsert?: RecipeIngredientUpsertWithoutOrderItemsInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientUpdateToOneWithWhereWithoutOrderItemsInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateToOneWithWhereWithoutOrderItemsInput)
    update?: RecipeIngredientUpdateToOneWithWhereWithoutOrderItemsInput;
}
