import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientOrderByWithAggregationInput } from './ingredient-order-by-with-aggregation.input';
import { IngredientScalarFieldEnum } from './ingredient-scalar-field.enum';
import { IngredientScalarWhereWithAggregatesInput } from './ingredient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { IngredientCountAggregateInput } from './ingredient-count-aggregate.input';
import { IngredientMinAggregateInput } from './ingredient-min-aggregate.input';
import { IngredientMaxAggregateInput } from './ingredient-max-aggregate.input';

@ArgsType()
export class IngredientGroupByArgs {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => [IngredientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<IngredientOrderByWithAggregationInput>;

    @Field(() => [IngredientScalarFieldEnum], {nullable:false})
    by!: Array<`${IngredientScalarFieldEnum}`>;

    @Field(() => IngredientScalarWhereWithAggregatesInput, {nullable:true})
    having?: IngredientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => IngredientCountAggregateInput, {nullable:true})
    _count?: IngredientCountAggregateInput;

    @Field(() => IngredientMinAggregateInput, {nullable:true})
    _min?: IngredientMinAggregateInput;

    @Field(() => IngredientMaxAggregateInput, {nullable:true})
    _max?: IngredientMaxAggregateInput;
}
