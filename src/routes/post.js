import { Router } from 'express'
import controller from '../controllers/post.js'

const router = Router()

router.get('/', controller.getPosts)
router.get('/:id', controller.getPost)
router.post('/', controller.postPost)
router.put('/:id', controller.putPost)
router.delete('/:id', controller.deletePost)

export default router