import { Request, Response, NextFunction } from 'express'

export function ensureAdmin(rq: Request, rs: Response, nx: NextFunction) {
    const admin: boolean = true

    if (admin) {
        return nx()
    }

    return rs.status(401).json({ message: 'User is not Admin' })
}
