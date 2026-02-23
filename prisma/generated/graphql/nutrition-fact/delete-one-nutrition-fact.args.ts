import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNutritionFactArgs {

    @Field(() => NutritionFactWhereUniqueInput, {nullable:false})
    @Type(() => NutritionFactWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;
}
