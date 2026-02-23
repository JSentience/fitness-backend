import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyMeasurementUpdateInput } from './body-measurement-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';

@ArgsType()
export class UpdateOneBodyMeasurementArgs {

    @Field(() => BodyMeasurementUpdateInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateInput)
    data!: BodyMeasurementUpdateInput;

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;
}
