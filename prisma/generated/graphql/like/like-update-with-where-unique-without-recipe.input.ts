import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutRecipeInput } from './like-update-without-recipe.input';

@InputType()
export class LikeUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => LikeUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => LikeUpdateWithoutRecipeInput)
    data!: LikeUpdateWithoutRecipeInput;
}
