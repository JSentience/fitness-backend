import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyMeasurementCreateWithoutUserInput } from './body-measurement-create-without-user.input';
import { Type } from 'class-transformer';
import { BodyMeasurementCreateOrConnectWithoutUserInput } from './body-measurement-create-or-connect-without-user.input';
import { BodyMeasurementUpsertWithoutUserInput } from './body-measurement-upsert-without-user.input';
import { BodyMeasurementWhereInput } from './body-measurement-where.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { BodyMeasurementWhereUniqueInput } from './body-measurement-where-unique.input';
import { BodyMeasurementUpdateToOneWithWhereWithoutUserInput } from './body-measurement-update-to-one-with-where-without-user.input';

@InputType()
export class BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => BodyMeasurementCreateWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementCreateWithoutUserInput)
    create?: BodyMeasurementCreateWithoutUserInput;

    @Field(() => BodyMeasurementCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementCreateOrConnectWithoutUserInput)
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutUserInput;

    @Field(() => BodyMeasurementUpsertWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementUpsertWithoutUserInput)
    upsert?: BodyMeasurementUpsertWithoutUserInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    disconnect?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementWhereInput, {nullable:true})
    @Type(() => BodyMeasurementWhereInput)
    delete?: BodyMeasurementWhereInput;

    @Field(() => BodyMeasurementWhereUniqueInput, {nullable:true})
    @Type(() => BodyMeasurementWhereUniqueInput)
    connect?: Prisma.AtLeast<BodyMeasurementWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyMeasurementUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => BodyMeasurementUpdateToOneWithWhereWithoutUserInput)
    update?: BodyMeasurementUpdateToOneWithWhereWithoutUserInput;
}
