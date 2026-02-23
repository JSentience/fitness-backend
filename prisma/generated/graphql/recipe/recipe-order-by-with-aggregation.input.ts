import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeCountOrderByAggregateInput } from './recipe-count-order-by-aggregate.input';
import { RecipeAvgOrderByAggregateInput } from './recipe-avg-order-by-aggregate.input';
import { RecipeMaxOrderByAggregateInput } from './recipe-max-order-by-aggregate.input';
import { RecipeMinOrderByAggregateInput } from './recipe-min-order-by-aggregate.input';
import { RecipeSumOrderByAggregateInput } from './recipe-sum-order-by-aggregate.input';

@InputType()
export class RecipeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    calories?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cookingTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeCountOrderByAggregateInput;

    @Field(() => RecipeAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeAvgOrderByAggregateInput;

    @Field(() => RecipeMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeMaxOrderByAggregateInput;

    @Field(() => RecipeMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeMinOrderByAggregateInput;

    @Field(() => RecipeSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeSumOrderByAggregateInput;
}
