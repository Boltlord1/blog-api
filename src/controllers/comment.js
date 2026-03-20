import { validationResult, matchedData } from 'express-validator'
import prisma from '../lib/prisma.js'

async function getComments(req, res) {
    const postId = Number(req.params.id)
    const comments = await prisma.comment.findMany({ where: { postId }})
    res.json(comments)
}

async function postComment(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())
    const { user, text } = matchedData(req)
    const id = Number(req.params.id)
    await prisma.comment.create({ data: {
        user,
        text,
        post: { connect: { id }}
    }})
    res.json(true)
}

async function deleteComment(req, res) {
    const id = Number(req.params.id)
    await prisma.comment.delete({ where: { id }})
    res.redirect(`${req.headers.origin}/post/${id}`)
    res.json(true)
}

export default {
    getComments,
    postComment,
    deleteComment
}