import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { BodyMeasurementUncheckedCreateNestedOneWithoutUserInput } from '../body-measurement/body-measurement-unchecked-create-nested-one-without-user.input';
import { RecipeUncheckedCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-unchecked-create-nested-many-without-author.input';
import { LikeUncheckedCreateNestedManyWithoutUserInput } from '../like/like-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

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

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => BodyMeasurementUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    measurements?: BodyMeasurementUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
}
