import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionFactCountOrderByAggregateInput } from './nutrition-fact-count-order-by-aggregate.input';
import { NutritionFactAvgOrderByAggregateInput } from './nutrition-fact-avg-order-by-aggregate.input';
import { NutritionFactMaxOrderByAggregateInput } from './nutrition-fact-max-order-by-aggregate.input';
import { NutritionFactMinOrderByAggregateInput } from './nutrition-fact-min-order-by-aggregate.input';
import { NutritionFactSumOrderByAggregateInput } from './nutrition-fact-sum-order-by-aggregate.input';

@InputType()
export class NutritionFactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    proteins?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fats?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carbohydrates?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fiber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => NutritionFactCountOrderByAggregateInput, {nullable:true})
    _count?: NutritionFactCountOrderByAggregateInput;

    @Field(() => NutritionFactAvgOrderByAggregateInput, {nullable:true})
    _avg?: NutritionFactAvgOrderByAggregateInput;

    @Field(() => NutritionFactMaxOrderByAggregateInput, {nullable:true})
    _max?: NutritionFactMaxOrderByAggregateInput;

    @Field(() => NutritionFactMinOrderByAggregateInput, {nullable:true})
    _min?: NutritionFactMinOrderByAggregateInput;

    @Field(() => NutritionFactSumOrderByAggregateInput, {nullable:true})
    _sum?: NutritionFactSumOrderByAggregateInput;
}
