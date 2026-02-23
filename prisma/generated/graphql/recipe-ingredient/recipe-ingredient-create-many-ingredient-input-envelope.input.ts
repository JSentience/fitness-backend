import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateManyIngredientInput } from './recipe-ingredient-create-many-ingredient.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeIngredientCreateManyIngredientInputEnvelope {

    @Field(() => [RecipeIngredientCreateManyIngredientInput], {nullable:false})
    @Type(() => RecipeIngredientCreateManyIngredientInput)
    data!: Array<RecipeIngredientCreateManyIngredientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
