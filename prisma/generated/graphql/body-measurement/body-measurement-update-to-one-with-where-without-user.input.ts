import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Type } from 'class-transformer';
import { BodyMeasurementUpdateWithoutUserInput } from './body-measurement-update-without-user.input';

@InputType()
export class BodyMeasurementUpdateToOneWithWhereWithoutUserInput {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementUpdateWithoutUserInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateWithoutUserInput)
    data!: BodyMeasurementUpdateWithoutUserInput;
}
