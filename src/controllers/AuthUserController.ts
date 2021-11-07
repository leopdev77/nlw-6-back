import { Request, response, Response } from 'express'
import { AuthUserService } from '../services/AuthUserService'

class AuthUserConroller {
    async handle(rq: Request, rs: Response) {
        const service = new AuthUserService()
        const { email, password } = rq.body

        const token = await service.execute({ email, password })

        return rs.json(token)
    }
}

export { AuthUserConroller }
