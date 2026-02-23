import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutLikesInput } from './recipe-update-without-likes.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutLikesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutLikesInput)
    data!: RecipeUpdateWithoutLikesInput;
}
