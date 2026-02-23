import { Field, InputType } from '@nestjs/graphql'
import { BodyMeasurementUpdateWithoutUserInput } from 'prisma/generated/graphql/body-measurement'
import { ProfileUpdateWithoutUserInput } from 'prisma/generated/graphql/profile'

@InputType()
export class UserUpdateCustomInput {
	@Field(() => String, { nullable: true })
	email?: string

	@Field(() => String, { nullable: true })
	password?: string

	@Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
	profile?: ProfileUpdateWithoutUserInput

	@Field(() => BodyMeasurementUpdateWithoutUserInput, {
		nullable: true,
	})
	measurements?: BodyMeasurementUpdateWithoutUserInput
}
