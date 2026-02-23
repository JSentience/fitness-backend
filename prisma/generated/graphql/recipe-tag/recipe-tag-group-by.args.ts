import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeTagWhereInput } from './recipe-tag-where.input';
import { Type } from 'class-transformer';
import { RecipeTagOrderByWithAggregationInput } from './recipe-tag-order-by-with-aggregation.input';
import { RecipeTagScalarFieldEnum } from './recipe-tag-scalar-field.enum';
import { RecipeTagScalarWhereWithAggregatesInput } from './recipe-tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeTagCountAggregateInput } from './recipe-tag-count-aggregate.input';
import { RecipeTagMinAggregateInput } from './recipe-tag-min-aggregate.input';
import { RecipeTagMaxAggregateInput } from './recipe-tag-max-aggregate.input';

@ArgsType()
export class RecipeTagGroupByArgs {

    @Field(() => RecipeTagWhereInput, {nullable:true})
    @Type(() => RecipeTagWhereInput)
    where?: RecipeTagWhereInput;

    @Field(() => [RecipeTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeTagOrderByWithAggregationInput>;

    @Field(() => [RecipeTagScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeTagScalarFieldEnum}`>;

    @Field(() => RecipeTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeTagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeTagCountAggregateInput, {nullable:true})
    _count?: RecipeTagCountAggregateInput;

    @Field(() => RecipeTagMinAggregateInput, {nullable:true})
    _min?: RecipeTagMinAggregateInput;

    @Field(() => RecipeTagMaxAggregateInput, {nullable:true})
    _max?: RecipeTagMaxAggregateInput;
}
