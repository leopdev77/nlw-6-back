import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthUserConroller } from './controllers/AuthUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuth } from './middlewares/ensureAuth'
import { ListSenderComplimentsController } from './controllers/ListSenderComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authController = new AuthUserConroller()
const complimentController = new CreateComplimentController()
const complimentsContoller = new ListSenderComplimentsController()
const listTagController = new ListTagsController()

router.post('/users', createUserController.handle)
router.post('/users/auth', authController.handle)
router.post('/compliments', ensureAuth, complimentController.handle)
router.get('/compliments-sender', ensureAuth, complimentsContoller.handle)

router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle)
router.get('/tags', listTagController.handle)

export { router }
