import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { BodyMeasurementOrderByWithRelationInput } from '../body-measurement/body-measurement-order-by-with-relation.input';
import { RecipeOrderByRelationAggregateInput } from '../recipe/recipe-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => BodyMeasurementOrderByWithRelationInput, {nullable:true})
    measurements?: BodyMeasurementOrderByWithRelationInput;

    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    recipes?: RecipeOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: OrderOrderByRelationAggregateInput;
}
