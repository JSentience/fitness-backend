import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionFactCreateInput } from './nutrition-fact-create.input';
import { NutritionFactUpdateInput } from './nutrition-fact-update.input';

@ArgsType()
export class UpsertOneNutritionFactArgs {

    @Field(() => NutritionFactWhereUniqueInput, {nullable:false})
    @Type(() => NutritionFactWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;

    @Field(() => NutritionFactCreateInput, {nullable:false})
    @Type(() => NutritionFactCreateInput)
    create!: NutritionFactCreateInput;

    @Field(() => NutritionFactUpdateInput, {nullable:false})
    @Type(() => NutritionFactUpdateInput)
    update!: NutritionFactUpdateInput;
}
