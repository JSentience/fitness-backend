import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Type } from 'class-transformer';
import { BodyMeasurementOrderByWithAggregationInput } from './body-measurement-order-by-with-aggregation.input';
import { BodyMeasurementScalarFieldEnum } from './body-measurement-scalar-field.enum';
import { BodyMeasurementScalarWhereWithAggregatesInput } from './body-measurement-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementCountAggregateInput } from './body-measurement-count-aggregate.input';
import { BodyMeasurementAvgAggregateInput } from './body-measurement-avg-aggregate.input';
import { BodyMeasurementSumAggregateInput } from './body-measurement-sum-aggregate.input';
import { BodyMeasurementMinAggregateInput } from './body-measurement-min-aggregate.input';
import { BodyMeasurementMaxAggregateInput } from './body-measurement-max-aggregate.input';

@ArgsType()
export class BodyMeasurementGroupByArgs {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;

    @Field(() => [BodyMeasurementOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BodyMeasurementOrderByWithAggregationInput>;

    @Field(() => [BodyMeasurementScalarFieldEnum], {nullable:false})
    by!: Array<`${BodyMeasurementScalarFieldEnum}`>;

    @Field(() => BodyMeasurementScalarWhereWithAggregatesInput, {nullable:true})
    having?: BodyMeasurementScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BodyMeasurementCountAggregateInput, {nullable:true})
    _count?: BodyMeasurementCountAggregateInput;

    @Field(() => BodyMeasurementAvgAggregateInput, {nullable:true})
    _avg?: BodyMeasurementAvgAggregateInput;

    @Field(() => BodyMeasurementSumAggregateInput, {nullable:true})
    _sum?: BodyMeasurementSumAggregateInput;

    @Field(() => BodyMeasurementMinAggregateInput, {nullable:true})
    _min?: BodyMeasurementMinAggregateInput;

    @Field(() => BodyMeasurementMaxAggregateInput, {nullable:true})
    _max?: BodyMeasurementMaxAggregateInput;
}
