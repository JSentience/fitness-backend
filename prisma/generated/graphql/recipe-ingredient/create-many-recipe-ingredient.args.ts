import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientCreateManyInput } from './recipe-ingredient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeIngredientArgs {

    @Field(() => [RecipeIngredientCreateManyInput], {nullable:false})
    @Type(() => RecipeIngredientCreateManyInput)
    data!: Array<RecipeIngredientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
