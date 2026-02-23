import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBodyMeasurementArgs {

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;
}
