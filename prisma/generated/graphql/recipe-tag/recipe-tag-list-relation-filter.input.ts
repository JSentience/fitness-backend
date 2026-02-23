import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTagWhereInput } from './recipe-tag-where.input';

@InputType()
export class RecipeTagListRelationFilter {

    @Field(() => RecipeTagWhereInput, {nullable:true})
    every?: RecipeTagWhereInput;

    @Field(() => RecipeTagWhereInput, {nullable:true})
    some?: RecipeTagWhereInput;

    @Field(() => RecipeTagWhereInput, {nullable:true})
    none?: RecipeTagWhereInput;
}
