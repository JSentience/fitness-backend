import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';

@InputType()
export class NutritionFactWhereInput {

    @Field(() => [NutritionFactWhereInput], {nullable:true})
    AND?: Array<NutritionFactWhereInput>;

    @Field(() => [NutritionFactWhereInput], {nullable:true})
    OR?: Array<NutritionFactWhereInput>;

    @Field(() => [NutritionFactWhereInput], {nullable:true})
    NOT?: Array<NutritionFactWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    proteins?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    fats?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    carbohydrates?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    fiber?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    recipe?: RecipeScalarRelationFilter;
}
