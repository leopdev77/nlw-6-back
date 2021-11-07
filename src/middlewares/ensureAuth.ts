import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayLoad {
    sub: string
}

export function ensureAuth(rq: Request, rs: Response, nx: NextFunction) {
    const token = rq.headers.authorization

    if (!token) {
        return rs.status(401).end()
    }

    const [, tokenNumber] = token.split(' ')

    try {
        const { sub } = verify(
            tokenNumber,
            '5420821fd88003697335419671f4a71b'
        ) as IPayLoad
        //console.log(decode)
        rq.user_id = sub
        return nx()
    } catch (error) {
        return rs.status(401).end()
    }
}
