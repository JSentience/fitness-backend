import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientOrderByWithAggregationInput } from './recipe-ingredient-order-by-with-aggregation.input';
import { RecipeIngredientScalarFieldEnum } from './recipe-ingredient-scalar-field.enum';
import { RecipeIngredientScalarWhereWithAggregatesInput } from './recipe-ingredient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientCountAggregateInput } from './recipe-ingredient-count-aggregate.input';
import { RecipeIngredientAvgAggregateInput } from './recipe-ingredient-avg-aggregate.input';
import { RecipeIngredientSumAggregateInput } from './recipe-ingredient-sum-aggregate.input';
import { RecipeIngredientMinAggregateInput } from './recipe-ingredient-min-aggregate.input';
import { RecipeIngredientMaxAggregateInput } from './recipe-ingredient-max-aggregate.input';

@ArgsType()
export class RecipeIngredientGroupByArgs {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;

    @Field(() => [RecipeIngredientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientOrderByWithAggregationInput>;

    @Field(() => [RecipeIngredientScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeIngredientScalarFieldEnum}`>;

    @Field(() => RecipeIngredientScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeIngredientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeIngredientCountAggregateInput, {nullable:true})
    _count?: RecipeIngredientCountAggregateInput;

    @Field(() => RecipeIngredientAvgAggregateInput, {nullable:true})
    _avg?: RecipeIngredientAvgAggregateInput;

    @Field(() => RecipeIngredientSumAggregateInput, {nullable:true})
    _sum?: RecipeIngredientSumAggregateInput;

    @Field(() => RecipeIngredientMinAggregateInput, {nullable:true})
    _min?: RecipeIngredientMinAggregateInput;

    @Field(() => RecipeIngredientMaxAggregateInput, {nullable:true})
    _max?: RecipeIngredientMaxAggregateInput;
}
