import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumUnitFilter } from '../prisma/enum-unit-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';
import { IngredientScalarRelationFilter } from '../ingredient/ingredient-scalar-relation-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';

@InputType()
export class RecipeIngredientWhereInput {

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientWhereInput>;

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

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    recipe?: RecipeScalarRelationFilter;

    @Field(() => IngredientScalarRelationFilter, {nullable:true})
    ingredient?: IngredientScalarRelationFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    orderItems?: OrderItemListRelationFilter;
}
