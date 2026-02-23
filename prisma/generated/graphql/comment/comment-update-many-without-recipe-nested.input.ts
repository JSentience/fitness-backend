import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutRecipeInput } from './comment-create-without-recipe.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutRecipeInput } from './comment-create-or-connect-without-recipe.input';
import { CommentUpsertWithWhereUniqueWithoutRecipeInput } from './comment-upsert-with-where-unique-without-recipe.input';
import { CommentCreateManyRecipeInputEnvelope } from './comment-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutRecipeInput } from './comment-update-with-where-unique-without-recipe.input';
import { CommentUpdateManyWithWhereWithoutRecipeInput } from './comment-update-many-with-where-without-recipe.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutRecipeNestedInput {

    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;

    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: CommentCreateManyRecipeInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
