import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCreateInput } from './recipe-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeArgs {

    @Field(() => RecipeCreateInput, {nullable:false})
    @Type(() => RecipeCreateInput)
    data!: RecipeCreateInput;
}
