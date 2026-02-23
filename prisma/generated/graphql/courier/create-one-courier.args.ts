import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierCreateInput } from './courier-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCourierArgs {

    @Field(() => CourierCreateInput, {nullable:false})
    @Type(() => CourierCreateInput)
    data!: CourierCreateInput;
}
