import { Router } from 'express'
import controller from '../controllers/post.js'
import { verifyToken } from '../controllers/index.js'

const router = Router()

router.get('/', controller.getPosts)
router.get('/:id', controller.getPost)
router.post('/', verifyToken, controller.postPost)
router.put('/:id', verifyToken, controller.putPost)
router.delete('/:id', verifyToken, controller.deletePost)

export default router