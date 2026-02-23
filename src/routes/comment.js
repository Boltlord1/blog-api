import { Router } from 'express'
import { body } from 'express-validator'
import controller from '../controllers/comment.js'
import { verifyToken } from '../controllers/index.js'

const user = body('user').isLength({ max: 256 }).withMessage('Username cannot be more than 256 characters.')
const text = body('text')

const router = Router()

router.get('/:id', controller.getComments)
router.post('/:id', user, text, controller.postComment)
router.delete('/:id', verifyToken, controller.deleteComment)

export default router