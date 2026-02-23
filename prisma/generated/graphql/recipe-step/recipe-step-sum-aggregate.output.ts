import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeStepSumAggregate {

    @Field(() => Int, {nullable:true})
    order?: number;
}
