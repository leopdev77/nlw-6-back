import { Request, Response } from 'express'
import { ListSenderComplimentsService } from '../services/ListSenderComplimentsService'

class ListSenderComplimentsController {
    async handle(request: Request, response: Response) {
        // const { tag_id, user_receiver, message } = request.body

        // const user_sender = request.user_id

        const service = new ListSenderComplimentsService()

        const compliment = await service.execute(request.user_id)

        return response.json(compliment)
    }
}

export { ListSenderComplimentsController }
