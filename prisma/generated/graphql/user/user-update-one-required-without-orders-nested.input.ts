import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOrdersInput } from './user-create-or-connect-without-orders.input';
import { UserUpsertWithoutOrdersInput } from './user-upsert-without-orders.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOrdersInput } from './user-update-to-one-with-where-without-orders.input';

@InputType()
export class UserUpdateOneRequiredWithoutOrdersNestedInput {

    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: UserCreateWithoutOrdersInput;

    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;

    @Field(() => UserUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpsertWithoutOrdersInput)
    upsert?: UserUpsertWithoutOrdersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOrdersInput)
    update?: UserUpdateToOneWithWhereWithoutOrdersInput;
}
