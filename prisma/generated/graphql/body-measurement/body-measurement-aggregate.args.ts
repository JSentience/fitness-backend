import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Type } from 'class-transformer';
import { BodyMeasurementOrderByWithRelationInput } from './body-measurement-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BodyMeasurementCountAggregateInput } from './body-measurement-count-aggregate.input';
import { BodyMeasurementAvgAggregateInput } from './body-measurement-avg-aggregate.input';
import { BodyMeasurementSumAggregateInput } from './body-measurement-sum-aggregate.input';
import { BodyMeasurementMinAggregateInput } from './body-measurement-min-aggregate.input';
import { BodyMeasurementMaxAggregateInput } from './body-measurement-max-aggregate.input';

@ArgsType()
export class BodyMeasurementAggregateArgs {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;

    @Field(() => [BodyMeasurementOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BodyMeasurementOrderByWithRelationInput>;

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

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
