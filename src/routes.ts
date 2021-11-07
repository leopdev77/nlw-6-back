import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthUserConroller } from './controllers/AuthUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authController = new AuthUserConroller()
const complimentController = new CreateComplimentController()

router.post('/users', createUserController.handle)
router.post('/users/auth', authController.handle)
router.post('/compliments', complimentController.handle)

router.post('/tags', ensureAdmin, createTagController.handle)

export { router }
