import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipesInput } from './ingredient-update-without-recipes.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipesInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesInput)
    data!: IngredientUpdateWithoutRecipesInput;
}
