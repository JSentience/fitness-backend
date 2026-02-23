import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionFactUpdateWithoutRecipeInput } from './nutrition-fact-update-without-recipe.input';
import { Type } from 'class-transformer';
import { NutritionFactCreateWithoutRecipeInput } from './nutrition-fact-create-without-recipe.input';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';

@InputType()
export class NutritionFactUpsertWithoutRecipeInput {

    @Field(() => NutritionFactUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => NutritionFactUpdateWithoutRecipeInput)
    update!: NutritionFactUpdateWithoutRecipeInput;

    @Field(() => NutritionFactCreateWithoutRecipeInput, {nullable:false})
    @Type(() => NutritionFactCreateWithoutRecipeInput)
    create!: NutritionFactCreateWithoutRecipeInput;

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    where?: NutritionFactWhereInput;
}
