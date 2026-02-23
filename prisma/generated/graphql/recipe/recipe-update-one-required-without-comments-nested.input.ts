import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutCommentsInput } from './recipe-create-without-comments.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutCommentsInput } from './recipe-create-or-connect-without-comments.input';
import { RecipeUpsertWithoutCommentsInput } from './recipe-upsert-without-comments.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutCommentsInput } from './recipe-update-to-one-with-where-without-comments.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create?: RecipeCreateWithoutCommentsInput;

    @Field(() => RecipeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput;

    @Field(() => RecipeUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutCommentsInput)
    upsert?: RecipeUpsertWithoutCommentsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutCommentsInput)
    update?: RecipeUpdateToOneWithWhereWithoutCommentsInput;
}
