import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutCommentsInput } from './recipe-update-without-comments.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCommentsInput)
    data!: RecipeUpdateWithoutCommentsInput;
}
