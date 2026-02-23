import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOrdersInput } from './user-create-or-connect-without-orders.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOrdersInput {

    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: UserCreateWithoutOrdersInput;

    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
