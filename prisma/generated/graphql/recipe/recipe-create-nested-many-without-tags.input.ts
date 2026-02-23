import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutTagsInput } from './recipe-create-without-tags.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutTagsInput } from './recipe-create-or-connect-without-tags.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedManyWithoutTagsInput {

    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;

    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;
}
