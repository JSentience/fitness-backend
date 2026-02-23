import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateInput } from './body-measurement-create.input';
import { BodyMeasurementUpdateInput } from './body-measurement-update.input';

@ArgsType()
export class UpsertOneBodyMeasurementArgs {

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyMeasurementCreateInput, {nullable:false})
    @Type(() => BodyMeasurementCreateInput)
    create!: BodyMeasurementCreateInput;

    @Field(() => BodyMeasurementUpdateInput, {nullable:false})
    @Type(() => BodyMeasurementUpdateInput)
    update!: BodyMeasurementUpdateInput;
}
