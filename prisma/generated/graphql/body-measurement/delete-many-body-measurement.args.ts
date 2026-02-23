import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBodyMeasurementArgs {

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    where?: BodyMeasurementWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
