import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutLikesInput } from './recipe-create-without-likes.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutLikesInput } from './recipe-create-or-connect-without-likes.input';
import { RecipeUpsertWithoutLikesInput } from './recipe-upsert-without-likes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutLikesInput } from './recipe-update-to-one-with-where-without-likes.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutLikesNestedInput {

    @Field(() => RecipeCreateWithoutLikesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutLikesInput)
    create?: RecipeCreateWithoutLikesInput;

    @Field(() => RecipeCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutLikesInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput;

    @Field(() => RecipeUpsertWithoutLikesInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutLikesInput)
    upsert?: RecipeUpsertWithoutLikesInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutLikesInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutLikesInput)
    update?: RecipeUpdateToOneWithWhereWithoutLikesInput;
}
