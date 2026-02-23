import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class ProfileGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: ProfileCountAggregate;

    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: ProfileAvgAggregate;

    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: ProfileSumAggregate;

    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: ProfileMaxAggregate;
}
