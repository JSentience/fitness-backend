import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUpdateWithoutOrderItemsInput } from './recipe-ingredient-update-without-order-items.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutOrderItemsInput } from './recipe-ingredient-create-without-order-items.input';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';

@InputType()
export class RecipeIngredientUpsertWithoutOrderItemsInput {

    @Field(() => RecipeIngredientUpdateWithoutOrderItemsInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutOrderItemsInput)
    update!: RecipeIngredientUpdateWithoutOrderItemsInput;

    @Field(() => RecipeIngredientCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutOrderItemsInput)
    create!: RecipeIngredientCreateWithoutOrderItemsInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;
}
