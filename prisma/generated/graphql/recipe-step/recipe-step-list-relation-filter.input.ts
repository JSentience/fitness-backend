import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';

@InputType()
export class RecipeStepListRelationFilter {

    @Field(() => RecipeStepWhereInput, {nullable:true})
    every?: RecipeStepWhereInput;

    @Field(() => RecipeStepWhereInput, {nullable:true})
    some?: RecipeStepWhereInput;

    @Field(() => RecipeStepWhereInput, {nullable:true})
    none?: RecipeStepWhereInput;
}
