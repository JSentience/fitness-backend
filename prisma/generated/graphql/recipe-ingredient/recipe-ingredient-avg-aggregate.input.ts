import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}
