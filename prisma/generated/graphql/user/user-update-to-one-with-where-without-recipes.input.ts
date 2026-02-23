import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRecipesInput } from './user-update-without-recipes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRecipesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipesInput)
    data!: UserUpdateWithoutRecipesInput;
}
