import { Router } from 'express'
import { postLogIn } from '../controllers/index.js'

const router = Router()

router.post('/login', postLogIn)

export default router