import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientCreateNestedOneWithoutOrderItemsInput } from '../recipe-ingredient/recipe-ingredient-create-nested-one-without-order-items.input';

@InputType()
export class OrderItemCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientCreateNestedOneWithoutOrderItemsInput, {nullable:false})
    recipeIngredient!: RecipeIngredientCreateNestedOneWithoutOrderItemsInput;
}
