import { Router } from 'express'
import controller from '../controllers/post.js'

const router = Router()

router.get('/', controller.getPosts)

export default router