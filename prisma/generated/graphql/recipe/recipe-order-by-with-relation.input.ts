import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { NutritionFactOrderByWithRelationInput } from '../nutrition-fact/nutrition-fact-order-by-with-relation.input';
import { RecipeTagOrderByRelationAggregateInput } from '../recipe-tag/recipe-tag-order-by-relation-aggregate.input';
import { RecipeStepOrderByRelationAggregateInput } from '../recipe-step/recipe-step-order-by-relation-aggregate.input';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';

@InputType()
export class RecipeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    calories?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cookingTime?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => NutritionFactOrderByWithRelationInput, {nullable:true})
    nutritionFact?: NutritionFactOrderByWithRelationInput;

    @Field(() => RecipeTagOrderByRelationAggregateInput, {nullable:true})
    tags?: RecipeTagOrderByRelationAggregateInput;

    @Field(() => RecipeStepOrderByRelationAggregateInput, {nullable:true})
    recipeSteps?: RecipeStepOrderByRelationAggregateInput;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;
}
