import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IngredientCountAggregate } from './ingredient-count-aggregate.output';
import { IngredientMinAggregate } from './ingredient-min-aggregate.output';
import { IngredientMaxAggregate } from './ingredient-max-aggregate.output';

@ObjectType()
export class AggregateIngredient {

    @Field(() => IngredientCountAggregate, {nullable:true})
    _count?: IngredientCountAggregate;

    @Field(() => IngredientMinAggregate, {nullable:true})
    _min?: IngredientMinAggregate;

    @Field(() => IngredientMaxAggregate, {nullable:true})
    _max?: IngredientMaxAggregate;
}
