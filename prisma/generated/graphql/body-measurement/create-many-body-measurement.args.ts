import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementCreateManyInput } from './body-measurement-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBodyMeasurementArgs {

    @Field(() => [BodyMeasurementCreateManyInput], {nullable:false})
    @Type(() => BodyMeasurementCreateManyInput)
    data!: Array<BodyMeasurementCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
