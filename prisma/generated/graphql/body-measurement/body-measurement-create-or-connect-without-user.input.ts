import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateWithoutUserInput } from './body-measurement-create-without-user.input';

@InputType()
export class BodyMeasurementCreateOrConnectWithoutUserInput {

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:false})
    @Type(() => BodyMeasurementWhereUniqueInput)
    where!: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyMeasurementCreateWithoutUserInput, {nullable:false})
    @Type(() => BodyMeasurementCreateWithoutUserInput)
    create!: BodyMeasurementCreateWithoutUserInput;
}
