import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CourierCountOrderByAggregateInput } from './courier-count-order-by-aggregate.input';
import { CourierMaxOrderByAggregateInput } from './courier-max-order-by-aggregate.input';
import { CourierMinOrderByAggregateInput } from './courier-min-order-by-aggregate.input';

@InputType()
export class CourierOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CourierCountOrderByAggregateInput, {nullable:true})
    _count?: CourierCountOrderByAggregateInput;

    @Field(() => CourierMaxOrderByAggregateInput, {nullable:true})
    _max?: CourierMaxOrderByAggregateInput;

    @Field(() => CourierMinOrderByAggregateInput, {nullable:true})
    _min?: CourierMinOrderByAggregateInput;
}
