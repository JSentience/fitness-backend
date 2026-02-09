import { Request, Response } from 'express'

export interface IGqlContext {
	res: Response
	req: Request
}
