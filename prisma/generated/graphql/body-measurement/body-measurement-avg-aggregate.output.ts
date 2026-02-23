import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementAvgAggregate {

    @Field(() => Float, {nullable:true})
    heightCm?: number;

    @Field(() => Float, {nullable:true})
    weightKg?: number;

    @Field(() => Float, {nullable:true})
    goalWeightKg?: number;

    @Field(() => Float, {nullable:true})
    chestCm?: number;

    @Field(() => Float, {nullable:true})
    waistCm?: number;

    @Field(() => Float, {nullable:true})
    thighCm?: number;

    @Field(() => Float, {nullable:true})
    armCm?: number;
}
