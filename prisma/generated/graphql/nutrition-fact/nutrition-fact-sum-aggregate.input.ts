import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionFactSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    proteins?: true;

    @Field(() => Boolean, {nullable:true})
    fats?: true;

    @Field(() => Boolean, {nullable:true})
    carbohydrates?: true;

    @Field(() => Boolean, {nullable:true})
    fiber?: true;
}
