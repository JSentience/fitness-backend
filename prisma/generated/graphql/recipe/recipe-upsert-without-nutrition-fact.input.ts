import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutNutritionFactInput } from './recipe-update-without-nutrition-fact.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionFactInput } from './recipe-create-without-nutrition-fact.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutNutritionFactInput {

    @Field(() => RecipeUpdateWithoutNutritionFactInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionFactInput)
    update!: RecipeUpdateWithoutNutritionFactInput;

    @Field(() => RecipeCreateWithoutNutritionFactInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionFactInput)
    create!: RecipeCreateWithoutNutritionFactInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
