import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyLikeArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
