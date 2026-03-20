import prisma from '../lib/prisma.js'

async function getPosts(req, res) {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

async function getPost(req, res) {
    const id = Number(req.params.id)
    const post = await prisma.post.findUnique({ where: { id }})
    res.json(post)
}

async function postPost(req, res) {
    const title = req.body.title
    const text = req.body.text
    const post = await prisma.post.create({ data: {
        title,
        text
    }})
    res.json(true)
}

async function putPost(req, res) {
    const id = Number(req.params.id)
    const title = req.body.title
    const text = req.body.text
    await prisma.post.update({
        where: { id },
        data: {
            title,
            text
        }
    })
    res.json(true)
}

async function deletePost(req, res) {
    const id = Number(req.params.id)
    const post = prisma.post.delete({ where: { id }})
    const comment = prisma.comment.deleteMany({ where: { postId: id }})
    await prisma.$transaction([comment, post])
    res.json(true)
}

export default {
    getPosts,
    getPost,
    postPost,
    putPost,
    deletePost
}