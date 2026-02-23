import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeStepScalarWhereInput {

    @Field(() => [RecipeStepScalarWhereInput], {nullable:true})
    AND?: Array<RecipeStepScalarWhereInput>;

    @Field(() => [RecipeStepScalarWhereInput], {nullable:true})
    OR?: Array<RecipeStepScalarWhereInput>;

    @Field(() => [RecipeStepScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeStepScalarWhereInput>;

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
}
