import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IngredientCountAggregate } from './ingredient-count-aggregate.output';
import { IngredientMinAggregate } from './ingredient-min-aggregate.output';
import { IngredientMaxAggregate } from './ingredient-max-aggregate.output';

@ObjectType()
export class IngredientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => IngredientCountAggregate, {nullable:true})
    _count?: IngredientCountAggregate;

    @Field(() => IngredientMinAggregate, {nullable:true})
    _min?: IngredientMinAggregate;

    @Field(() => IngredientMaxAggregate, {nullable:true})
    _max?: IngredientMaxAggregate;
}
