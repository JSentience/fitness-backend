import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRecipeStepArgs {

    @Field(() => RecipeStepWhereInput, {nullable:true})
    @Type(() => RecipeStepWhereInput)
    where?: RecipeStepWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
