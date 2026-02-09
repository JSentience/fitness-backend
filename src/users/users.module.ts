import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
	imports: [PrismaModule],
	providers: [UsersResolver, UsersService, PrismaService],
	exports: [UsersService],
})
export class UsersModule {}
