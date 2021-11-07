import { Request, Response } from 'express'

import { ListTagService } from '../services/ListTagService'

class ListTagsController {
    async handle(rq: Request, rs: Response) {
        const service = new ListTagService()
        const list = await service.execute()

        return rs.json(list)
    }
}

export { ListTagsController }
