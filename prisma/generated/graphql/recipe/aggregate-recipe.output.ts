import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeCountAggregate } from './recipe-count-aggregate.output';
import { RecipeAvgAggregate } from './recipe-avg-aggregate.output';
import { RecipeSumAggregate } from './recipe-sum-aggregate.output';
import { RecipeMinAggregate } from './recipe-min-aggregate.output';
import { RecipeMaxAggregate } from './recipe-max-aggregate.output';

@ObjectType()
export class AggregateRecipe {

    @Field(() => RecipeCountAggregate, {nullable:true})
    _count?: RecipeCountAggregate;

    @Field(() => RecipeAvgAggregate, {nullable:true})
    _avg?: RecipeAvgAggregate;

    @Field(() => RecipeSumAggregate, {nullable:true})
    _sum?: RecipeSumAggregate;

    @Field(() => RecipeMinAggregate, {nullable:true})
    _min?: RecipeMinAggregate;

    @Field(() => RecipeMaxAggregate, {nullable:true})
    _max?: RecipeMaxAggregate;
}
