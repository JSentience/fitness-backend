import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { IngredientCountOrderByAggregateInput } from './ingredient-count-order-by-aggregate.input';
import { IngredientMaxOrderByAggregateInput } from './ingredient-max-order-by-aggregate.input';
import { IngredientMinOrderByAggregateInput } from './ingredient-min-order-by-aggregate.input';

@InputType()
export class IngredientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    iconUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => IngredientCountOrderByAggregateInput, {nullable:true})
    _count?: IngredientCountOrderByAggregateInput;

    @Field(() => IngredientMaxOrderByAggregateInput, {nullable:true})
    _max?: IngredientMaxOrderByAggregateInput;

    @Field(() => IngredientMinOrderByAggregateInput, {nullable:true})
    _min?: IngredientMinOrderByAggregateInput;
}
