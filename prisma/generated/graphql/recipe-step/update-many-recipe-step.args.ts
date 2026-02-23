import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepUpdateManyMutationInput } from './recipe-step-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRecipeStepArgs {

    @Field(() => RecipeStepUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeStepUpdateManyMutationInput)
    data!: RecipeStepUpdateManyMutationInput;

    @Field(() => RecipeStepWhereInput, {nullable:true})
    @Type(() => RecipeStepWhereInput)
    where?: RecipeStepWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
