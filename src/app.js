import express from 'express'
import cors from 'cors'
import indexRouter from './routes/index.js'
import postRouter from './routes/post.js'
import commentRouter from './routes/comment.js'

const app = express()

const front = process.env.FRONT_LINK
const edit = process.env.EDIT_LINK

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: (origin, cb) => {
        if (origin === front || origin === edit) {
            cb( null, true)
        } else {
            cb(new Error('Not allowed by CORS'))
        }
    }
}))

app.use('/', indexRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`App listening on port ${port}`)
})