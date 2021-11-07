import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IContentRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

class CreateComplimentService {
    async execute({
        tag_id,
        user_sender,
        user_receiver,
        message
    }: IContentRequest) {
        const repository = getCustomRepository(ComplimentsRepositories)
        const user_repository = getCustomRepository(UsersRepositories)

        if (!tag_id) {
            throw new Error('Tag is required')
        }

        if (user_receiver === user_sender) {
            throw new Error('User dont send compliments for yourself')
        }

        const userReceiveExist = await user_repository.findOne(user_receiver)

        if (!userReceiveExist) {
            throw new Error('User receiver invalid')
        }

        console.log(tag_id)
        const compliment = repository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })
        console.log(compliment)
        await repository.save(compliment)

        return compliment
    }
}

export { CreateComplimentService }
