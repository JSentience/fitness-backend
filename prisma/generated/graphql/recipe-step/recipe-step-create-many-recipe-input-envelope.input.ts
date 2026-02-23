import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepCreateManyRecipeInput } from './recipe-step-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeStepCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeStepCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeStepCreateManyRecipeInput)
    data!: Array<RecipeStepCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
