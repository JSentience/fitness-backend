import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { OrderItem } from '../order-item/order-item.model';

@ObjectType()
export class RecipeIngredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Unit, {defaultValue:'GRAM',nullable:false})
    unit!: `${Unit}`;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => Ingredient, {nullable:false})
    ingredient?: Ingredient;

    @Field(() => [OrderItem], {nullable:true})
    orderItems?: Array<OrderItem>;
}
