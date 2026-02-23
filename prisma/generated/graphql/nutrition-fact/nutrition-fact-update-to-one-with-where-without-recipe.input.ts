import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Type } from 'class-transformer';
import { NutritionFactUpdateWithoutRecipeInput } from './nutrition-fact-update-without-recipe.input';

@InputType()
export class NutritionFactUpdateToOneWithWhereWithoutRecipeInput {

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    where?: NutritionFactWhereInput;

    @Field(() => NutritionFactUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => NutritionFactUpdateWithoutRecipeInput)
    data!: NutritionFactUpdateWithoutRecipeInput;
}
