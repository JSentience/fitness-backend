import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import type { Prisma } from 'prisma/generated/prisma/client'

import { PrismaService } from 'src/prisma/prisma.service'
import { UserUpdateCustomInput } from './inputs/user-update.input'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return this.prisma.user.findMany()
	}

	async findById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				measurements: true,
				profile: true,
			},
		})
	}

	async findByEmail(email: string) {
		return this.prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive',
				},
			},
		})
	}

	async updateProfile(id: string, input: UserUpdateCustomInput) {
		const { profile, measurements, password, ...data } = input

		// Получаем текущего пользователя для проверки существования профиля
		const existingUser = await this.prisma.user.findUnique({
			where: { id },
			include: {
				profile: true,
				measurements: true,
			},
		})

		if (!existingUser) {
			throw new Error('User not found')
		}

		// Создаём объект для обновления профиля
		let updateProfile: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = {}

		if (profile) {
			if (profile.fullName) {
				// Если fullName указан, используем upsert (создать или обновить)
				updateProfile = {
					profile: {
						upsert: {
							create: profile as Prisma.ProfileCreateWithoutUserInput,
							update: profile as Prisma.ProfileUpdateWithoutUserInput,
						},
					},
				}
			} else if (existingUser.profile) {
				// Если fullName не указан, но профиль существует - обновляем
				updateProfile = {
					profile: {
						update: profile as Prisma.ProfileUpdateWithoutUserInput,
					},
				}
			}
			// Если профиля нет и fullName не указанc - ничего не делаем (updateProfile остается {})
		}

		const updateMeasurements: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = measurements
			? {
					measurements: {
						upsert: {
							create: measurements,
							update: measurements,
						},
					},
				}
			: {}

		const hashedPassword =
			password && typeof password === 'string'
				? {
						password: await hash(password),
					}
				: {}

		const updateData = {
			...hashedPassword,
			...updateProfile,
			...updateMeasurements,
			...(data.email ? { email: data.email } : {}),
		}

		return this.prisma.user.update({
			where: { id },
			data: updateData,
			include: {
				measurements: true,
				profile: true,
			},
		})
	}
}
