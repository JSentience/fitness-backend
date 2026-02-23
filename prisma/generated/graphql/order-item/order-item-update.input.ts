import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput } from '../recipe-ingredient/recipe-ingredient-update-one-required-without-order-items-nested.input';

@InputType()
export class OrderItemUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    price?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput, {nullable:true})
    recipeIngredient?: RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput;
}
