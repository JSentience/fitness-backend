import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeStepCountOrderByAggregateInput } from './recipe-step-count-order-by-aggregate.input';
import { RecipeStepAvgOrderByAggregateInput } from './recipe-step-avg-order-by-aggregate.input';
import { RecipeStepMaxOrderByAggregateInput } from './recipe-step-max-order-by-aggregate.input';
import { RecipeStepMinOrderByAggregateInput } from './recipe-step-min-order-by-aggregate.input';
import { RecipeStepSumOrderByAggregateInput } from './recipe-step-sum-order-by-aggregate.input';

@InputType()
export class RecipeStepOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeStepCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeStepCountOrderByAggregateInput;

    @Field(() => RecipeStepAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeStepAvgOrderByAggregateInput;

    @Field(() => RecipeStepMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeStepMaxOrderByAggregateInput;

    @Field(() => RecipeStepMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeStepMinOrderByAggregateInput;

    @Field(() => RecipeStepSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeStepSumOrderByAggregateInput;
}
