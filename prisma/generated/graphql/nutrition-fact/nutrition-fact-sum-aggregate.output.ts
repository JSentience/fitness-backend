import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NutritionFactSumAggregate {

    @Field(() => Float, {nullable:true})
    proteins?: number;

    @Field(() => Float, {nullable:true})
    fats?: number;

    @Field(() => Float, {nullable:true})
    carbohydrates?: number;

    @Field(() => Float, {nullable:true})
    fiber?: number;
}
