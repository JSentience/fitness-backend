import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionFactWhereInput } from './nutrition-fact-where.input';
import { Type } from 'class-transformer';
import { NutritionFactOrderByWithRelationInput } from './nutrition-fact-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { NutritionFactWhereUniqueInput } from './nutrition-fact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionFactCountAggregateInput } from './nutrition-fact-count-aggregate.input';
import { NutritionFactAvgAggregateInput } from './nutrition-fact-avg-aggregate.input';
import { NutritionFactSumAggregateInput } from './nutrition-fact-sum-aggregate.input';
import { NutritionFactMinAggregateInput } from './nutrition-fact-min-aggregate.input';
import { NutritionFactMaxAggregateInput } from './nutrition-fact-max-aggregate.input';

@ArgsType()
export class NutritionFactAggregateArgs {

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

    @Field(() => NutritionFactCountAggregateInput, {nullable:true})
    _count?: NutritionFactCountAggregateInput;

    @Field(() => NutritionFactAvgAggregateInput, {nullable:true})
    _avg?: NutritionFactAvgAggregateInput;

    @Field(() => NutritionFactSumAggregateInput, {nullable:true})
    _sum?: NutritionFactSumAggregateInput;

    @Field(() => NutritionFactMinAggregateInput, {nullable:true})
    _min?: NutritionFactMinAggregateInput;

    @Field(() => NutritionFactMaxAggregateInput, {nullable:true})
    _max?: NutritionFactMaxAggregateInput;
}
