import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagCreateInput } from './recipe-tag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeTagArgs {

    @Field(() => RecipeTagCreateInput, {nullable:false})
    @Type(() => RecipeTagCreateInput)
    data!: RecipeTagCreateInput;
}
