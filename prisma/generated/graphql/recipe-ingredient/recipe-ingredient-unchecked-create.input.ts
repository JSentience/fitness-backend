import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput } from '../order-item/order-item-unchecked-create-nested-many-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput, {nullable:true})
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput;
}
