import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';

@InputType()
export class RecipeStepWhereInput {

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    AND?: Array<RecipeStepWhereInput>;

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    OR?: Array<RecipeStepWhereInput>;

    @Field(() => [RecipeStepWhereInput], {nullable:true})
    NOT?: Array<RecipeStepWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
