import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJWTConfig = (
	configService: ConfigService,
): JwtModuleOptions => ({
	secret: configService.get<string>('JWT_SECRET'),
})
