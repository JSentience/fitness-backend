import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepCreateManyInput } from './recipe-step-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeStepArgs {

    @Field(() => [RecipeStepCreateManyInput], {nullable:false})
    @Type(() => RecipeStepCreateManyInput)
    data!: Array<RecipeStepCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
