import express from 'express'
import cors from 'cors'
import indexRouter from './routes/index.js'
import postRouter from './routes/post.js'
import commentRouter from './routes/comment.js'

const app = express()

const allowedOrigins = [ process.env.FRONT_LINK, process.env.EDIT_LINK ]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: (origin, callback) => {
        console.log(origin)
        console.log(allowedOrigins[0])
        console.log(allowedOrigins[1])
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
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