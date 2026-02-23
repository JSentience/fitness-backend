import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierCreateManyInput } from './courier-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCourierArgs {

    @Field(() => [CourierCreateManyInput], {nullable:false})
    @Type(() => CourierCreateManyInput)
    data!: Array<CourierCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
