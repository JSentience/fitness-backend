import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BodyMeasurementCountAggregate } from './body-measurement-count-aggregate.output';
import { BodyMeasurementAvgAggregate } from './body-measurement-avg-aggregate.output';
import { BodyMeasurementSumAggregate } from './body-measurement-sum-aggregate.output';
import { BodyMeasurementMinAggregate } from './body-measurement-min-aggregate.output';
import { BodyMeasurementMaxAggregate } from './body-measurement-max-aggregate.output';

@ObjectType()
export class AggregateBodyMeasurement {

    @Field(() => BodyMeasurementCountAggregate, {nullable:true})
    _count?: BodyMeasurementCountAggregate;

    @Field(() => BodyMeasurementAvgAggregate, {nullable:true})
    _avg?: BodyMeasurementAvgAggregate;

    @Field(() => BodyMeasurementSumAggregate, {nullable:true})
    _sum?: BodyMeasurementSumAggregate;

    @Field(() => BodyMeasurementMinAggregate, {nullable:true})
    _min?: BodyMeasurementMinAggregate;

    @Field(() => BodyMeasurementMaxAggregate, {nullable:true})
    _max?: BodyMeasurementMaxAggregate;
}
