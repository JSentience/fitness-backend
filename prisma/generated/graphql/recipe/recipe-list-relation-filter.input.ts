import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeListRelationFilter {

    @Field(() => RecipeWhereInput, {nullable:true})
    every?: RecipeWhereInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    some?: RecipeWhereInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    none?: RecipeWhereInput;
}
