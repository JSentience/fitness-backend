import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { BodyMeasurement } from '../body-measurement/body-measurement.model';
import { Recipe } from '../recipe/recipe.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { Order } from '../order/order.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {defaultValue:'USER',nullable:false})
    role!: `${Role}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => BodyMeasurement, {nullable:true})
    measurements?: BodyMeasurement | null;

    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;
}
