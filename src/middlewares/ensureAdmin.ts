import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(rq: Request, rs: Response, nx: NextFunction) {
    const { user_id } = rq
    const repository = getCustomRepository(UsersRepositories)

    const { admin } = await repository.findOne(user_id)

    if (admin) {
        return nx()
    }

    return rs.status(401).json({ message: 'User is not Admin' })
}
