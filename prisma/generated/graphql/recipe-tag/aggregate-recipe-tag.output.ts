import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeTagCountAggregate } from './recipe-tag-count-aggregate.output';
import { RecipeTagMinAggregate } from './recipe-tag-min-aggregate.output';
import { RecipeTagMaxAggregate } from './recipe-tag-max-aggregate.output';

@ObjectType()
export class AggregateRecipeTag {

    @Field(() => RecipeTagCountAggregate, {nullable:true})
    _count?: RecipeTagCountAggregate;

    @Field(() => RecipeTagMinAggregate, {nullable:true})
    _min?: RecipeTagMinAggregate;

    @Field(() => RecipeTagMaxAggregate, {nullable:true})
    _max?: RecipeTagMaxAggregate;
}
