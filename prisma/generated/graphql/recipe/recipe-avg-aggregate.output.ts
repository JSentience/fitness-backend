import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeAvgAggregate {

    @Field(() => Float, {nullable:true})
    calories?: number;

    @Field(() => Float, {nullable:true})
    cookingTime?: number;
}
