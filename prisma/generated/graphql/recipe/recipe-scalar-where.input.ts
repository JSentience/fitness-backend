import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDifficultyFilter } from '../prisma/enum-difficulty-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeScalarWhereInput {

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    AND?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    OR?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    calories?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cookingTime?: IntFilter;

    @Field(() => EnumDifficultyFilter, {nullable:true})
    difficulty?: EnumDifficultyFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
