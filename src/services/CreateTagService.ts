import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

interface ITagRequest {
    name: string
}

class CreateTagService {
    async execute({ name }: ITagRequest) {
        const repository = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new Error('Name incorrect')
        }

        const alreadyExists = await repository.findOne({
            name
        })

        if (alreadyExists) {
            throw new Error('Tag already exists')
        }

        const tag = repository.create({
            name
        })

        await repository.save(tag)

        return tag
    }
}

export { CreateTagService }
