import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class NutritionFactUncheckedUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    proteins?: number;

    @Field(() => Float, {nullable:true})
    fats?: number;

    @Field(() => Float, {nullable:true})
    carbohydrates?: number;

    @Field(() => Float, {nullable:true})
    fiber?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
