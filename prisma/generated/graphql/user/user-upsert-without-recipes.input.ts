import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecipesInput } from './user-update-without-recipes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecipesInput } from './user-create-without-recipes.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRecipesInput {

    @Field(() => UserUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipesInput)
    update!: UserUpdateWithoutRecipesInput;

    @Field(() => UserCreateWithoutRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipesInput)
    create!: UserCreateWithoutRecipesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
