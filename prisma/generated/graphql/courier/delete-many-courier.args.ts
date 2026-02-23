import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierWhereInput } from './courier-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCourierArgs {

    @Field(() => CourierWhereInput, {nullable:true})
    @Type(() => CourierWhereInput)
    where?: CourierWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
