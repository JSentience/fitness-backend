import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactUpdateManyMutationInput } from './nutrition-fact-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyNutritionFactArgs {

    @Field(() => NutritionFactUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionFactUpdateManyMutationInput)
    data!: NutritionFactUpdateManyMutationInput;

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    where?: NutritionFactWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
