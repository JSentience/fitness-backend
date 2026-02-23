import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientUpdateInput } from './ingredient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@ArgsType()
export class UpdateOneIngredientArgs {

    @Field(() => IngredientUpdateInput, {nullable:false})
    @Type(() => IngredientUpdateInput)
    data!: IngredientUpdateInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
