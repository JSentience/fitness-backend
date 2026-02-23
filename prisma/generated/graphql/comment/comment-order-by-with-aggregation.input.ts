import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: CommentCountOrderByAggregateInput;

    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentMaxOrderByAggregateInput;

    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: CommentMinOrderByAggregateInput;
}
