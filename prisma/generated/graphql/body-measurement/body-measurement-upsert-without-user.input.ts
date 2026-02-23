import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementUpdateWithoutUserInput } from './body-measurement-update-without-user.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateWithoutUserInput } from './body-measurement-create-without-user.input';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';

@InputType()
export class BodyMeasurementUpsertWithoutUserInput {

    @Field(() => BodyMeasurementUpdateWithoutUserInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateWithoutUserInput)
    update!: BodyMeasurementUpdateWithoutUserInput;

    @Field(() => BodyMeasurementCreateWithoutUserInput, {nullable:false})
    @Type(() => BodyMeasurementCreateWithoutUserInput)
    create!: BodyMeasurementCreateWithoutUserInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;
}
