import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutAuthorInput } from './recipe-create-or-connect-without-author.input';
import { RecipeUpsertWithWhereUniqueWithoutAuthorInput } from './recipe-upsert-with-where-unique-without-author.input';
import { RecipeCreateManyAuthorInputEnvelope } from './recipe-create-many-author-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutAuthorInput } from './recipe-update-with-where-unique-without-author.input';
import { RecipeUpdateManyWithWhereWithoutAuthorInput } from './recipe-update-many-with-where-without-author.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUpdateManyWithoutAuthorNestedInput {

    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;

    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: RecipeCreateManyAuthorInputEnvelope;

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

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
