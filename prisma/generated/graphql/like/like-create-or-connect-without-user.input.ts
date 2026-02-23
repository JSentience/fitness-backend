import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';

@InputType()
export class LikeCreateOrConnectWithoutUserInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => LikeCreateWithoutUserInput, {nullable:false})
    @Type(() => LikeCreateWithoutUserInput)
    create!: LikeCreateWithoutUserInput;
}
