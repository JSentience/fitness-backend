import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyUserInput } from './order-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyUserInputEnvelope {

    @Field(() => [OrderCreateManyUserInput], {nullable:false})
    @Type(() => OrderCreateManyUserInput)
    data!: Array<OrderCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
