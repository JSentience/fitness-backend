import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { Type } from 'class-transformer';
import { RecipeStepOrderByWithRelationInput } from './recipe-step-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeStepWhereUniqueInput } from './recipe-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeStepCountAggregateInput } from './recipe-step-count-aggregate.input';
import { RecipeStepAvgAggregateInput } from './recipe-step-avg-aggregate.input';
import { RecipeStepSumAggregateInput } from './recipe-step-sum-aggregate.input';
import { RecipeStepMinAggregateInput } from './recipe-step-min-aggregate.input';
import { RecipeStepMaxAggregateInput } from './recipe-step-max-aggregate.input';

@ArgsType()
export class RecipeStepAggregateArgs {

    @Field(() => RecipeStepWhereInput, {nullable:true})
    @Type(() => RecipeStepWhereInput)
    where?: RecipeStepWhereInput;

    @Field(() => [RecipeStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeStepOrderByWithRelationInput>;

    @Field(() => RecipeStepWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeStepWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeStepCountAggregateInput, {nullable:true})
    _count?: RecipeStepCountAggregateInput;

    @Field(() => RecipeStepAvgAggregateInput, {nullable:true})
    _avg?: RecipeStepAvgAggregateInput;

    @Field(() => RecipeStepSumAggregateInput, {nullable:true})
    _sum?: RecipeStepSumAggregateInput;

    @Field(() => RecipeStepMinAggregateInput, {nullable:true})
    _min?: RecipeStepMinAggregateInput;

    @Field(() => RecipeStepMaxAggregateInput, {nullable:true})
    _max?: RecipeStepMaxAggregateInput;
}
