import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeTagCreateWithoutRecipesInput } from './recipe-tag-create-without-recipes.input';
import { Type } from 'class-transformer';
import { RecipeTagCreateOrConnectWithoutRecipesInput } from './recipe-tag-create-or-connect-without-recipes.input';
import { RecipeTagUpsertWithWhereUniqueWithoutRecipesInput } from './recipe-tag-upsert-with-where-unique-without-recipes.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeTagWhereUniqueInput } from './recipe-tag-where-unique.input';
import { RecipeTagUpdateWithWhereUniqueWithoutRecipesInput } from './recipe-tag-update-with-where-unique-without-recipes.input';
import { RecipeTagUpdateManyWithWhereWithoutRecipesInput } from './recipe-tag-update-many-with-where-without-recipes.input';
import { RecipeTagScalarWhereInput } from './recipe-tag-scalar-where.input';

@InputType()
export class RecipeTagUncheckedUpdateManyWithoutRecipesNestedInput {

    @Field(() => [RecipeTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagCreateWithoutRecipesInput)
    create?: Array<RecipeTagCreateWithoutRecipesInput>;

    @Field(() => [RecipeTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<RecipeTagCreateOrConnectWithoutRecipesInput>;

    @Field(() => [RecipeTagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<RecipeTagUpsertWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeTagWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTagWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTagWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTagWhereUniqueInput], {nullable:true})
    @Type(() => RecipeTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeTagWhereUniqueInput, 'id' | 'name'>>;

    @Field(() => [RecipeTagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<RecipeTagUpdateWithWhereUniqueWithoutRecipesInput>;

    @Field(() => [RecipeTagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => RecipeTagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<RecipeTagUpdateManyWithWhereWithoutRecipesInput>;

    @Field(() => [RecipeTagScalarWhereInput], {nullable:true})
    @Type(() => RecipeTagScalarWhereInput)
    deleteMany?: Array<RecipeTagScalarWhereInput>;
}
