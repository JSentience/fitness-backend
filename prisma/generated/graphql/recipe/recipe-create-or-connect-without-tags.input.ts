import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutTagsInput } from './recipe-create-without-tags.input';

@InputType()
export class RecipeCreateOrConnectWithoutTagsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutTagsInput)
    create!: RecipeCreateWithoutTagsInput;
}
