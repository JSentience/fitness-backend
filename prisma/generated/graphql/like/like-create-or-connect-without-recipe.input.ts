import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutRecipeInput } from './like-create-without-recipe.input';

@InputType()
export class LikeCreateOrConnectWithoutRecipeInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => LikeCreateWithoutRecipeInput, {nullable:false})
    @Type(() => LikeCreateWithoutRecipeInput)
    create!: LikeCreateWithoutRecipeInput;
}
