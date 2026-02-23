import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientAvgAggregate {

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
