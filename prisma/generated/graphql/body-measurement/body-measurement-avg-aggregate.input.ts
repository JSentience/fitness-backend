import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BodyMeasurementAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    heightCm?: true;

    @Field(() => Boolean, {nullable:true})
    weightKg?: true;

    @Field(() => Boolean, {nullable:true})
    goalWeightKg?: true;

    @Field(() => Boolean, {nullable:true})
    chestCm?: true;

    @Field(() => Boolean, {nullable:true})
    waistCm?: true;

    @Field(() => Boolean, {nullable:true})
    thighCm?: true;

    @Field(() => Boolean, {nullable:true})
    armCm?: true;
}
