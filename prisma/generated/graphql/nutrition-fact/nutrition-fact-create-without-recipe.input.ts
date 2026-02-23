import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class NutritionFactCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    proteins!: number;

    @Field(() => Float, {nullable:false})
    fats!: number;

    @Field(() => Float, {nullable:false})
    carbohydrates!: number;

    @Field(() => Float, {nullable:false})
    fiber!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
