import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierUpdateManyMutationInput } from './courier-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CourierWhereInput } from './courier-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCourierArgs {

    @Field(() => CourierUpdateManyMutationInput, {nullable:false})
    @Type(() => CourierUpdateManyMutationInput)
    data!: CourierUpdateManyMutationInput;

    @Field(() => CourierWhereInput, {nullable:true})
    @Type(() => CourierWhereInput)
    where?: CourierWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
