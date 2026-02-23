import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutNutritionFactInput } from './recipe-update-without-nutrition-fact.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutNutritionFactInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutNutritionFactInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionFactInput)
    data!: RecipeUpdateWithoutNutritionFactInput;
}
