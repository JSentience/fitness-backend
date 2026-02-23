import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeStepCountAggregate } from './recipe-step-count-aggregate.output';
import { RecipeStepAvgAggregate } from './recipe-step-avg-aggregate.output';
import { RecipeStepSumAggregate } from './recipe-step-sum-aggregate.output';
import { RecipeStepMinAggregate } from './recipe-step-min-aggregate.output';
import { RecipeStepMaxAggregate } from './recipe-step-max-aggregate.output';

@ObjectType()
export class AggregateRecipeStep {

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
