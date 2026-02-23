import prisma from '../lib/prisma.js'

async function getPosts(req, res) {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

export default {
    getPosts
}