import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementCreateInput } from './body-measurement-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBodyMeasurementArgs {

    @Field(() => BodyMeasurementCreateInput, {nullable:false})
    @Type(() => BodyMeasurementCreateInput)
    data!: BodyMeasurementCreateInput;
}
