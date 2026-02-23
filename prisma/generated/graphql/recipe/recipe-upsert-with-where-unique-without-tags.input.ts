import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutTagsInput } from './recipe-update-without-tags.input';
import { RecipeCreateWithoutTagsInput } from './recipe-create-without-tags.input';

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutTagsInput)
    update!: RecipeUpdateWithoutTagsInput;

    @Field(() => RecipeCreateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutTagsInput)
    create!: RecipeCreateWithoutTagsInput;
}
