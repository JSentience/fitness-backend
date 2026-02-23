import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientScalarRelationFilter {

    @Field(() => IngredientWhereInput, {nullable:true})
    is?: IngredientWhereInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    isNot?: IngredientWhereInput;
}
