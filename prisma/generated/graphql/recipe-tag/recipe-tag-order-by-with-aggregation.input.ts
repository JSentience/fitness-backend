import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeTagCountOrderByAggregateInput } from './recipe-tag-count-order-by-aggregate.input';
import { RecipeTagMaxOrderByAggregateInput } from './recipe-tag-max-order-by-aggregate.input';
import { RecipeTagMinOrderByAggregateInput } from './recipe-tag-min-order-by-aggregate.input';

@InputType()
export class RecipeTagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeTagCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeTagCountOrderByAggregateInput;

    @Field(() => RecipeTagMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeTagMaxOrderByAggregateInput;

    @Field(() => RecipeTagMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeTagMinOrderByAggregateInput;
}
