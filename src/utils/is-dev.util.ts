import { ConfigService } from '@nestjs/config'

export const isDev = (configService: ConfigService) => {
	return configService.get<string>('NODE_ENV') === 'development'
}
