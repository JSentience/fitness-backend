import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateInput } from './ingredient-create.input';
import { IngredientUpdateInput } from './ingredient-update.input';

@ArgsType()
export class UpsertOneIngredientArgs {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateInput, {nullable:false})
    @Type(() => IngredientCreateInput)
    create!: IngredientCreateInput;

    @Field(() => IngredientUpdateInput, {nullable:false})
    @Type(() => IngredientUpdateInput)
    update!: IngredientUpdateInput;
}
