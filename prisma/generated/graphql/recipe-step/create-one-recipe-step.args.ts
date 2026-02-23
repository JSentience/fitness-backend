import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepCreateInput } from './recipe-step-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeStepArgs {

    @Field(() => RecipeStepCreateInput, {nullable:false})
    @Type(() => RecipeStepCreateInput)
    data!: RecipeStepCreateInput;
}
