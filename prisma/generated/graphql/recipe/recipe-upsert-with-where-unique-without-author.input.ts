import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutAuthorInput } from './recipe-update-without-author.input';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAuthorInput)
    update!: RecipeUpdateWithoutAuthorInput;

    @Field(() => RecipeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create!: RecipeCreateWithoutAuthorInput;
}
