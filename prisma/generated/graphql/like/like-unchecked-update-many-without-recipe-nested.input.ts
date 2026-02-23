import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutRecipeInput } from './like-create-without-recipe.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutRecipeInput } from './like-create-or-connect-without-recipe.input';
import { LikeUpsertWithWhereUniqueWithoutRecipeInput } from './like-upsert-with-where-unique-without-recipe.input';
import { LikeCreateManyRecipeInputEnvelope } from './like-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutRecipeInput } from './like-update-with-where-unique-without-recipe.input';
import { LikeUpdateManyWithWhereWithoutRecipeInput } from './like-update-many-with-where-without-recipe.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutRecipeNestedInput {

    @Field(() => [LikeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => LikeCreateWithoutRecipeInput)
    create?: Array<LikeCreateWithoutRecipeInput>;

    @Field(() => [LikeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutRecipeInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => LikeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyRecipeInputEnvelope)
    createMany?: LikeCreateManyRecipeInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
