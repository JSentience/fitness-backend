import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipesIngridientInput } from './ingredient-update-without-recipes-ingridient.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngridientInput } from './ingredient-create-without-recipes-ingridient.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipesIngridientInput {

    @Field(() => IngredientUpdateWithoutRecipesIngridientInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngridientInput)
    update!: IngredientUpdateWithoutRecipesIngridientInput;

    @Field(() => IngredientCreateWithoutRecipesIngridientInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngridientInput)
    create!: IngredientCreateWithoutRecipesIngridientInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
