import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutCommentsInput } from './recipe-update-without-comments.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutCommentsInput } from './recipe-create-without-comments.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutCommentsInput {

    @Field(() => RecipeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCommentsInput)
    update!: RecipeUpdateWithoutCommentsInput;

    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create!: RecipeCreateWithoutCommentsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
