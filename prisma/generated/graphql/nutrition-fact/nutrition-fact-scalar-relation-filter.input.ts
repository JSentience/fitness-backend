import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';

@InputType()
export class NutritionFactScalarRelationFilter {

    @Field(() => NutritionFactWhereInput, {nullable:true})
    is?: NutritionFactWhereInput;

    @Field(() => NutritionFactWhereInput, {nullable:true})
    isNot?: NutritionFactWhereInput;
}
