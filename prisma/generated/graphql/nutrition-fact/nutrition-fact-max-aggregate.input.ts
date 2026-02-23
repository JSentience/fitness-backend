import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionFactMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    proteins?: true;

    @Field(() => Boolean, {nullable:true})
    fats?: true;

    @Field(() => Boolean, {nullable:true})
    carbohydrates?: true;

    @Field(() => Boolean, {nullable:true})
    fiber?: true;

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
