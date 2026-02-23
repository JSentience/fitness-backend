import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Type } from 'class-transformer';
import { NutritionFactOrderByWithRelationInput } from './nutrition-fact-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionFactScalarFieldEnum } from './nutrition-fact-scalar-field.enum';

@ArgsType()
export class FindFirstNutritionFactArgs {

    @Field(() => NutritionFactWhereInput, {nullable:true})
    @Type(() => NutritionFactWhereInput)
    where?: NutritionFactWhereInput;

    @Field(() => [NutritionFactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionFactOrderByWithRelationInput>;

    @Field(() => NutritionFactWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionFactWhereUniqueInput, 'id' | 'recipeId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionFactScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NutritionFactScalarFieldEnum}`>;
}
