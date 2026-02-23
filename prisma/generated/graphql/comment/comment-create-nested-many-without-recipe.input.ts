import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutRecipeInput } from './comment-create-without-recipe.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutRecipeInput } from './comment-create-or-connect-without-recipe.input';
import { CommentCreateManyRecipeInputEnvelope } from './comment-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutRecipeInput {

    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;

    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;

    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: CommentCreateManyRecipeInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
