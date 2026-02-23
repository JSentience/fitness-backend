import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactUpdateInput } from './nutrition-fact-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';

@ArgsType()
export class UpdateOneNutritionFactArgs {

    @Field(() => NutritionFactUpdateInput, {nullable:false})
    @Type(() => NutritionFactUpdateInput)
    data!: NutritionFactUpdateInput;

    @Field(() => NutritionFactWhereUniqueInput, {nullable:false})
    @Type(() => NutritionFactWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;
}
