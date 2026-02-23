import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecipesInput } from './user-create-without-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecipesInput } from './user-create-or-connect-without-recipes.input';
import { UserUpsertWithoutRecipesInput } from './user-upsert-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRecipesInput } from './user-update-to-one-with-where-without-recipes.input';

@InputType()
export class UserUpdateOneRequiredWithoutRecipesNestedInput {

    @Field(() => UserCreateWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipesInput)
    create?: UserCreateWithoutRecipesInput;

    @Field(() => UserCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput;

    @Field(() => UserUpsertWithoutRecipesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRecipesInput)
    upsert?: UserUpsertWithoutRecipesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRecipesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRecipesInput)
    update?: UserUpdateToOneWithWhereWithoutRecipesInput;
}
