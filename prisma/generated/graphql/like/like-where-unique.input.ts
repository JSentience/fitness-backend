import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeRecipeIdUserIdCompoundUniqueInput } from './like-recipe-id-user-id-compound-unique.input';
import { LikeWhereInput } from './like-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class LikeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LikeRecipeIdUserIdCompoundUniqueInput, {nullable:true})
    recipeId_userId?: LikeRecipeIdUserIdCompoundUniqueInput;

    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    recipe?: RecipeScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
