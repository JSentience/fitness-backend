import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-unchecked-update-many-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => String, {nullable:true})
    ingredientId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    orderItems?: OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput;
}
