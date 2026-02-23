import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { RecipeCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';
import { OrderCreateNestedManyWithoutUserInput } from '../order/order-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutMeasurementsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: RecipeCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutUserInput;

    @Field(() => OrderCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderCreateNestedManyWithoutUserInput;
}
