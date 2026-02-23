import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutAuthorInput } from './recipe-create-or-connect-without-author.input';
import { RecipeCreateManyAuthorInputEnvelope } from './recipe-create-many-author-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;

    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;

    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: RecipeCreateManyAuthorInputEnvelope;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>>;
}
