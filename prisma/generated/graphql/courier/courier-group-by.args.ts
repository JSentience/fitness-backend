import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierWhereInput } from './courier-where.input';
import { Type } from 'class-transformer';
import { CourierOrderByWithAggregationInput } from './courier-order-by-with-aggregation.input';
import { CourierScalarFieldEnum } from './courier-scalar-field.enum';
import { CourierScalarWhereWithAggregatesInput } from './courier-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CourierCountAggregateInput } from './courier-count-aggregate.input';
import { CourierMinAggregateInput } from './courier-min-aggregate.input';
import { CourierMaxAggregateInput } from './courier-max-aggregate.input';

@ArgsType()
export class CourierGroupByArgs {

    @Field(() => CourierWhereInput, {nullable:true})
    @Type(() => CourierWhereInput)
    where?: CourierWhereInput;

    @Field(() => [CourierOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CourierOrderByWithAggregationInput>;

    @Field(() => [CourierScalarFieldEnum], {nullable:false})
    by!: Array<`${CourierScalarFieldEnum}`>;

    @Field(() => CourierScalarWhereWithAggregatesInput, {nullable:true})
    having?: CourierScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourierCountAggregateInput, {nullable:true})
    _count?: CourierCountAggregateInput;

    @Field(() => CourierMinAggregateInput, {nullable:true})
    _min?: CourierMinAggregateInput;

    @Field(() => CourierMaxAggregateInput, {nullable:true})
    _max?: CourierMaxAggregateInput;
}
