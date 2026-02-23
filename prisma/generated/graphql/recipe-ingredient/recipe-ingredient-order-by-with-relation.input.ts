import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { IngredientOrderByWithRelationInput } from '../ingredient/ingredient-order-by-with-relation.input';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';

@InputType()
export class RecipeIngredientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ingredientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: RecipeOrderByWithRelationInput;

    @Field(() => IngredientOrderByWithRelationInput, {nullable:true})
    ingredient?: IngredientOrderByWithRelationInput;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    orderItems?: OrderItemOrderByRelationAggregateInput;
}
