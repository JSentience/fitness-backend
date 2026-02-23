import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { Type } from 'class-transformer';
import { RecipeStepOrderByWithAggregationInput } from './recipe-step-order-by-with-aggregation.input';
import { RecipeStepScalarFieldEnum } from './recipe-step-scalar-field.enum';
import { RecipeStepScalarWhereWithAggregatesInput } from './recipe-step-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeStepCountAggregateInput } from './recipe-step-count-aggregate.input';
import { RecipeStepAvgAggregateInput } from './recipe-step-avg-aggregate.input';
import { RecipeStepSumAggregateInput } from './recipe-step-sum-aggregate.input';
import { RecipeStepMinAggregateInput } from './recipe-step-min-aggregate.input';
import { RecipeStepMaxAggregateInput } from './recipe-step-max-aggregate.input';

@ArgsType()
export class RecipeStepGroupByArgs {

    @Field(() => RecipeStepWhereInput, {nullable:true})
    @Type(() => RecipeStepWhereInput)
    where?: RecipeStepWhereInput;

    @Field(() => [RecipeStepOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeStepOrderByWithAggregationInput>;

    @Field(() => [RecipeStepScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeStepScalarFieldEnum}`>;

    @Field(() => RecipeStepScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeStepScalarWhereWithAggregatesInput;

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
