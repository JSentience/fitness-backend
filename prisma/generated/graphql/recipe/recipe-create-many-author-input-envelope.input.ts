import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateManyAuthorInput } from './recipe-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeCreateManyAuthorInputEnvelope {

    @Field(() => [RecipeCreateManyAuthorInput], {nullable:false})
    @Type(() => RecipeCreateManyAuthorInput)
    data!: Array<RecipeCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
