import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourierCountAggregate } from './courier-count-aggregate.output';
import { CourierMinAggregate } from './courier-min-aggregate.output';
import { CourierMaxAggregate } from './courier-max-aggregate.output';

@ObjectType()
export class AggregateCourier {

    @Field(() => CourierCountAggregate, {nullable:true})
    _count?: CourierCountAggregate;

    @Field(() => CourierMinAggregate, {nullable:true})
    _min?: CourierMinAggregate;

    @Field(() => CourierMaxAggregate, {nullable:true})
    _max?: CourierMaxAggregate;
}
