import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateManyRecipeInput } from './recipe-ingredient-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeIngredientCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeIngredientCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeIngredientCreateManyRecipeInput)
    data!: Array<RecipeIngredientCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
