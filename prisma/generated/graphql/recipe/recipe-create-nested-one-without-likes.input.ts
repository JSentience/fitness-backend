import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutLikesInput } from './recipe-create-without-likes.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutLikesInput } from './recipe-create-or-connect-without-likes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutLikesInput {

    @Field(() => RecipeCreateWithoutLikesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutLikesInput)
    create?: RecipeCreateWithoutLikesInput;

    @Field(() => RecipeCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutLikesInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
