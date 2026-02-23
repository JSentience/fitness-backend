import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-ingredients-nested.input';
import { IngredientUpdateOneRequiredWithoutRecipesIngridientNestedInput } from '../ingredient/ingredient-update-one-required-without-recipes-ingridient-nested.input';
import { OrderItemUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-update-many-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput;

    @Field(() => IngredientUpdateOneRequiredWithoutRecipesIngridientNestedInput, {nullable:true})
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesIngridientNestedInput;

    @Field(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    orderItems?: OrderItemUpdateManyWithoutRecipeIngredientNestedInput;
}
