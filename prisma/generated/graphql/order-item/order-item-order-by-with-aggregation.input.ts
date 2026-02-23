import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderItemCountOrderByAggregateInput } from './order-item-count-order-by-aggregate.input';
import { OrderItemAvgOrderByAggregateInput } from './order-item-avg-order-by-aggregate.input';
import { OrderItemMaxOrderByAggregateInput } from './order-item-max-order-by-aggregate.input';
import { OrderItemMinOrderByAggregateInput } from './order-item-min-order-by-aggregate.input';
import { OrderItemSumOrderByAggregateInput } from './order-item-sum-order-by-aggregate.input';

@InputType()
export class OrderItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeIngredientId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    quantity?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderItemCountOrderByAggregateInput, {nullable:true})
    _count?: OrderItemCountOrderByAggregateInput;

    @Field(() => OrderItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderItemAvgOrderByAggregateInput;

    @Field(() => OrderItemMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderItemMaxOrderByAggregateInput;

    @Field(() => OrderItemMinOrderByAggregateInput, {nullable:true})
    _min?: OrderItemMinOrderByAggregateInput;

    @Field(() => OrderItemSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderItemSumOrderByAggregateInput;
}
