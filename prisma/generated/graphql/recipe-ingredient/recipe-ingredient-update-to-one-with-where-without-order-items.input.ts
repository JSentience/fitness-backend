import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutOrderItemsInput } from './recipe-ingredient-update-without-order-items.input';

@InputType()
export class RecipeIngredientUpdateToOneWithWhereWithoutOrderItemsInput {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;

    @Field(() => RecipeIngredientUpdateWithoutOrderItemsInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutOrderItemsInput)
    data!: RecipeIngredientUpdateWithoutOrderItemsInput;
}
