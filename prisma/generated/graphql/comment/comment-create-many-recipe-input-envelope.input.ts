import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyRecipeInput } from './comment-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyRecipeInputEnvelope {

    @Field(() => [CommentCreateManyRecipeInput], {nullable:false})
    @Type(() => CommentCreateManyRecipeInput)
    data!: Array<CommentCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
