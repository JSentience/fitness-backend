import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumUnitFilter } from '../prisma/enum-unit-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeIngredientScalarWhereInput {

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    unit?: EnumUnitFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
