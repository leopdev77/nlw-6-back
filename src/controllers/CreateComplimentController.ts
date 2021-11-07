import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'

class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_sender, user_receiver, message } = request.body

        const service = new CreateComplimentService()

        const compliment = await service.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        return response.json(compliment)
    }
}

export { CreateComplimentController }
