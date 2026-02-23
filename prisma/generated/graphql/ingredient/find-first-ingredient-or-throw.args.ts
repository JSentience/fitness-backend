import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientOrderByWithRelationInput } from './ingredient-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { IngredientScalarFieldEnum } from './ingredient-scalar-field.enum';

@ArgsType()
export class FindFirstIngredientOrThrowArgs {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => [IngredientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IngredientOrderByWithRelationInput>;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [IngredientScalarFieldEnum], {nullable:true})
    distinct?: Array<`${IngredientScalarFieldEnum}`>;
}
