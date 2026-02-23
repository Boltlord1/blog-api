import express from 'express'
import indexRouter from './routes/index.js'
import postRouter from './routes/post.js'
import commentRouter from './routes/comment.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`App listening on port ${port}`)
})