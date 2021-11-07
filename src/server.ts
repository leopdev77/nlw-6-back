import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import { router } from './routes'

import './database'

const app = express()

app.use(express.json())

app.use(router)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        //console.log('<--X-->')
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message
            })
        }

        return response.status(500).json({
            error: 'Error not defined!'
        })
    }
)

app.listen(3000, () => console.log('Server is running'))
