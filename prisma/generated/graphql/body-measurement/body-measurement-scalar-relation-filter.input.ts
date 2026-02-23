import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';

@InputType()
export class BodyMeasurementScalarRelationFilter {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    is?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    isNot?: BodyMeasurementWhereInput;
}
