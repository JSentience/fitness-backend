import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyNutritionFactArgs {

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    where?: NutritionFactWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
