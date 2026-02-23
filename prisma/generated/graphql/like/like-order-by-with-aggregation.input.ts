import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LikeCountOrderByAggregateInput } from './like-count-order-by-aggregate.input';
import { LikeMaxOrderByAggregateInput } from './like-max-order-by-aggregate.input';
import { LikeMinOrderByAggregateInput } from './like-min-order-by-aggregate.input';

@InputType()
export class LikeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => LikeCountOrderByAggregateInput, {nullable:true})
    _count?: LikeCountOrderByAggregateInput;

    @Field(() => LikeMaxOrderByAggregateInput, {nullable:true})
    _max?: LikeMaxOrderByAggregateInput;

    @Field(() => LikeMinOrderByAggregateInput, {nullable:true})
    _min?: LikeMinOrderByAggregateInput;
}
