import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CourierWhereUniqueInput } from './courier-where-unique.input';
import { Type } from 'class-transformer';
import { CourierCreateInput } from './courier-create.input';
import { CourierUpdateInput } from './courier-update.input';

@ArgsType()
export class UpsertOneCourierArgs {

    @Field(() => CourierWhereUniqueInput, {nullable:false})
    @Type(() => CourierWhereUniqueInput)
    where!: Prisma.AtLeast<CourierWhereUniqueInput, 'id'>;

    @Field(() => CourierCreateInput, {nullable:false})
    @Type(() => CourierCreateInput)
    create!: CourierCreateInput;

    @Field(() => CourierUpdateInput, {nullable:false})
    @Type(() => CourierUpdateInput)
    update!: CourierUpdateInput;
}
