import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeTagScalarWhereInput {

    @Field(() => [RecipeTagScalarWhereInput], {nullable:true})
    AND?: Array<RecipeTagScalarWhereInput>;

    @Field(() => [RecipeTagScalarWhereInput], {nullable:true})
    OR?: Array<RecipeTagScalarWhereInput>;

    @Field(() => [RecipeTagScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeTagScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
