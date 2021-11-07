import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListSenderComplimentsService {
    async execute(user_id: string) {
        const rep = getCustomRepository(ComplimentsRepositories)
        const lst = await rep.find({
            where: { user_sender: user_id },
            relations: ['tag']
        })

        return lst
    }
}

export { ListSenderComplimentsService }
