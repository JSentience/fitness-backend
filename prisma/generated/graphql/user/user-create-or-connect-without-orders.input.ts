import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOrdersInput } from './user-create-without-orders.input';

@InputType()
export class UserCreateOrConnectWithoutOrdersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: UserCreateWithoutOrdersInput;
}
