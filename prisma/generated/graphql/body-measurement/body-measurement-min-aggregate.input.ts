import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BodyMeasurementMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

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

    @Field(() => Boolean, {nullable:true})
    activityLevel?: true;

    @Field(() => Boolean, {nullable:true})
    nutritionGoal?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
