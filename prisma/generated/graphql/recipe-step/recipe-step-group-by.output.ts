import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeStepCountAggregate } from './recipe-step-count-aggregate.output';
import { RecipeStepAvgAggregate } from './recipe-step-avg-aggregate.output';
import { RecipeStepSumAggregate } from './recipe-step-sum-aggregate.output';
import { RecipeStepMinAggregate } from './recipe-step-min-aggregate.output';
import { RecipeStepMaxAggregate } from './recipe-step-max-aggregate.output';

@ObjectType()
export class RecipeStepGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeStepCountAggregate, {nullable:true})
    _count?: RecipeStepCountAggregate;

    @Field(() => RecipeStepAvgAggregate, {nullable:true})
    _avg?: RecipeStepAvgAggregate;

    @Field(() => RecipeStepSumAggregate, {nullable:true})
    _sum?: RecipeStepSumAggregate;

    @Field(() => RecipeStepMinAggregate, {nullable:true})
    _min?: RecipeStepMinAggregate;

    @Field(() => RecipeStepMaxAggregate, {nullable:true})
    _max?: RecipeStepMaxAggregate;
}
