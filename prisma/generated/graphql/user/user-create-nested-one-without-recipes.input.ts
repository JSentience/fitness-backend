import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipesInput } from './user-create-without-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipesInput } from './user-create-or-connect-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRecipesInput {

    @Field(() => UserCreateWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipesInput)
    create?: UserCreateWithoutRecipesInput;

    @Field(() => UserCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
