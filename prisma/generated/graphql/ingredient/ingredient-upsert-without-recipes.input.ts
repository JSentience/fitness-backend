import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipesInput } from './ingredient-update-without-recipes.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesInput } from './ingredient-create-without-recipes.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipesInput {

    @Field(() => IngredientUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesInput)
    update!: IngredientUpdateWithoutRecipesInput;

    @Field(() => IngredientCreateWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesInput)
    create!: IngredientCreateWithoutRecipesInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
