import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDifficultyFilter } from '../prisma/enum-difficulty-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { NutritionFactScalarRelationFilter } from '../nutrition-fact/nutrition-fact-scalar-relation-filter.input';
import { RecipeTagListRelationFilter } from '../recipe-tag/recipe-tag-list-relation-filter.input';
import { RecipeStepListRelationFilter } from '../recipe-step/recipe-step-list-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class RecipeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;

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

    @Field(() => UserScalarRelationFilter, {nullable:true})
    author?: UserScalarRelationFilter;

    @Field(() => NutritionFactScalarRelationFilter, {nullable:true})
    nutritionFact?: NutritionFactScalarRelationFilter;

    @Field(() => RecipeTagListRelationFilter, {nullable:true})
    tags?: RecipeTagListRelationFilter;

    @Field(() => RecipeStepListRelationFilter, {nullable:true})
    recipeSteps?: RecipeStepListRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    recipeIngredients?: RecipeIngredientListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;
}
