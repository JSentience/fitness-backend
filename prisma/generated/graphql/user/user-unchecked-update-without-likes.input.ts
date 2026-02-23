import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput } from '../body-measurement/body-measurement-unchecked-update-one-without-user-nested.input';
import { RecipeUncheckedUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-unchecked-update-many-without-author-nested.input';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input';
import { OrderUncheckedUpdateManyWithoutUserNestedInput } from '../order/order-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutLikesInput {

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

    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    measurements?: BodyMeasurementUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => OrderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
}
