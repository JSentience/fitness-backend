import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { BodyMeasurementUpdateOneWithoutUserNestedInput } from '../body-measurement/body-measurement-update-one-without-user-nested.input';
import { RecipeUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-update-many-without-author-nested.input';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';
import { LikeUpdateManyWithoutUserNestedInput } from '../like/like-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutOrdersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => BodyMeasurementUpdateOneWithoutUserNestedInput, {nullable:true})
    measurements?: BodyMeasurementUpdateOneWithoutUserNestedInput;

    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutAuthorNestedInput;

    @Field(() => LikeUpdateManyWithoutUserNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutUserNestedInput;
}
