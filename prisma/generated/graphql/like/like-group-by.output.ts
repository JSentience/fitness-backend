import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LikeCountAggregate } from './like-count-aggregate.output';
import { LikeMinAggregate } from './like-min-aggregate.output';
import { LikeMaxAggregate } from './like-max-aggregate.output';

@ObjectType()
export class LikeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LikeCountAggregate, {nullable:true})
    _count?: LikeCountAggregate;

    @Field(() => LikeMinAggregate, {nullable:true})
    _min?: LikeMinAggregate;

    @Field(() => LikeMaxAggregate, {nullable:true})
    _max?: LikeMaxAggregate;
}
