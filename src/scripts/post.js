import prisma from '../lib/prisma.js'

await prisma.post.create({ data: {
    title: 'First post!',
    text: 'This is the text content of the first post.'
}})
console.log('Created post')