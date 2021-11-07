import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { sign } from 'jsonwebtoken'

interface IAuth {
    email: string
    password: string
}

class AuthUserService {
    async execute({ email, password }: IAuth) {
        const repository = getCustomRepository(UsersRepositories)
        const user = await repository.findOne({
            email
        })

        if (!user) {
            throw new Error('Email incorrect')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('Password incorrect')
        }

        const token = sign(
            {
                email: user.email
            },
            '5420821fd88003697335419671f4a71b',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return token
    }
}

export { AuthUserService }
