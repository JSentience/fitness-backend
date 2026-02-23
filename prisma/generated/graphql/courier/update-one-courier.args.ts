import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourierUpdateInput } from './courier-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { CourierWhereUniqueInput } from './courier-where-unique.input';

@ArgsType()
export class UpdateOneCourierArgs {

    @Field(() => CourierUpdateInput, {nullable:false})
    @Type(() => CourierUpdateInput)
    data!: CourierUpdateInput;

    @Field(() => CourierWhereUniqueInput, {nullable:false})
    @Type(() => CourierWhereUniqueInput)
    where!: Prisma.AtLeast<CourierWhereUniqueInput, 'id'>;
}
