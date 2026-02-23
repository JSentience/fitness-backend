import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutCommentsInput;
}
