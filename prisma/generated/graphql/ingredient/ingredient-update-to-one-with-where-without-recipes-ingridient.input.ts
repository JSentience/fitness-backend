import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipesIngridientInput } from './ingredient-update-without-recipes-ingridient.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipesIngridientInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipesIngridientInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngridientInput)
    data!: IngredientUpdateWithoutRecipesIngridientInput;
}
