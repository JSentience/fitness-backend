import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutRecipeInput } from './like-create-without-recipe.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutRecipeInput } from './like-create-or-connect-without-recipe.input';
import { LikeCreateManyRecipeInputEnvelope } from './like-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [LikeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => LikeCreateWithoutRecipeInput)
    create?: Array<LikeCreateWithoutRecipeInput>;

    @Field(() => [LikeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutRecipeInput>;

    @Field(() => LikeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyRecipeInputEnvelope)
    createMany?: LikeCreateManyRecipeInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
