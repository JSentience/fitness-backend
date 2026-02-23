import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutLikesInput } from './recipe-create-without-likes.input';

@InputType()
export class RecipeCreateOrConnectWithoutLikesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutLikesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutLikesInput)
    create!: RecipeCreateWithoutLikesInput;
}
