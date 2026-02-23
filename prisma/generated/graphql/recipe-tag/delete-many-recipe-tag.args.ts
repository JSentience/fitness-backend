import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagWhereInput } from './recipe-tag-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRecipeTagArgs {

    @Field(() => RecipeTagWhereInput, {nullable:true})
    @Type(() => RecipeTagWhereInput)
    where?: RecipeTagWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
