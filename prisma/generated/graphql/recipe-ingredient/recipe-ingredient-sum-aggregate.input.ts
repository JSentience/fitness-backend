import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}
