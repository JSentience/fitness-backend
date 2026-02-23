import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutTagsInput } from './recipe-create-without-tags.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutTagsInput } from './recipe-create-or-connect-without-tags.input';
import { RecipeUpsertWithWhereUniqueWithoutTagsInput } from './recipe-upsert-with-where-unique-without-tags.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutTagsInput } from './recipe-update-with-where-unique-without-tags.input';
import { RecipeUpdateManyWithWhereWithoutTagsInput } from './recipe-update-many-with-where-without-tags.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutTagsNestedInput {

    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;

    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
