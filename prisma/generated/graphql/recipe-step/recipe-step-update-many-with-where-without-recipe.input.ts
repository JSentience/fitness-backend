import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepScalarWhereInput } from './recipe-step-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeStepUpdateManyMutationInput } from './recipe-step-update-many-mutation.input';

@InputType()
export class RecipeStepUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeStepScalarWhereInput, {nullable:false})
    @Type(() => RecipeStepScalarWhereInput)
    where!: RecipeStepScalarWhereInput;

    @Field(() => RecipeStepUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeStepUpdateManyMutationInput)
    data!: RecipeStepUpdateManyMutationInput;
}
