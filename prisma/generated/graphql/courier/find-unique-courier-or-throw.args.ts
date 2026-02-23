import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { CourierWhereUniqueInput } from './courier-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCourierOrThrowArgs {

    @Field(() => CourierWhereUniqueInput, {nullable:false})
    @Type(() => CourierWhereUniqueInput)
    where!: Prisma.AtLeast<CourierWhereUniqueInput, 'id'>;
}
