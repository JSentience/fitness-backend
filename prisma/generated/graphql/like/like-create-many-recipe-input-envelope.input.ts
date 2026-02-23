import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyRecipeInput } from './like-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyRecipeInputEnvelope {

    @Field(() => [LikeCreateManyRecipeInput], {nullable:false})
    @Type(() => LikeCreateManyRecipeInput)
    data!: Array<LikeCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
