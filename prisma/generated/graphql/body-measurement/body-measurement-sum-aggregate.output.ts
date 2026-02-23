import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BodyMeasurementSumAggregate {

    @Field(() => Int, {nullable:true})
    heightCm?: number;

    @Field(() => Int, {nullable:true})
    weightKg?: number;

    @Field(() => Int, {nullable:true})
    goalWeightKg?: number;

    @Field(() => Int, {nullable:true})
    chestCm?: number;

    @Field(() => Int, {nullable:true})
    waistCm?: number;

    @Field(() => Int, {nullable:true})
    thighCm?: number;

    @Field(() => Int, {nullable:true})
    armCm?: number;
}
