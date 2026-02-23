import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeStepWhereInput } from './recipe-step-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';

@InputType()
export class RecipeStepWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    AND?: Array<RecipeStepWhereInput>;

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    OR?: Array<RecipeStepWhereInput>;

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    NOT?: Array<RecipeStepWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    recipe?: RecipeScalarRelationFilter;
}
