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
    res.json(post)
}

async function putPost(req, res) {
    const id = Number(req.params.id)
    const title = req.body.title
    const text = req.body.text
    const post = await prisma.post.update({
        where: { id },
        data: {
            title,
            text
        }
    })
    res.json(post)
}

async function deletePost(req, res) {
    const id = Number(req.params.id)
    const post = await prisma.post.delete({ where: { id }})
    res.json(post)
}

export default {
    getPosts,
    getPost,
    postPost,
    putPost,
    deletePost
}