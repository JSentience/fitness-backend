import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementCreateWithoutUserInput } from './body-measurement-create-without-user.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateOrConnectWithoutUserInput } from './body-measurement-create-or-connect-without-user.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';

@InputType()
export class BodyMeasurementUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => BodyMeasurementCreateWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementCreateWithoutUserInput)
    create?: BodyMeasurementCreateWithoutUserInput;

    @Field(() => BodyMeasurementCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementCreateOrConnectWithoutUserInput)
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput;

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    connect?: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;
}
