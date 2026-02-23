import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutLikesInput } from './recipe-update-without-likes.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutLikesInput } from './recipe-create-without-likes.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutLikesInput {

    @Field(() => RecipeUpdateWithoutLikesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutLikesInput)
    update!: RecipeUpdateWithoutLikesInput;

    @Field(() => RecipeCreateWithoutLikesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutLikesInput)
    create!: RecipeCreateWithoutLikesInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
