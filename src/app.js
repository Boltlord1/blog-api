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
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use('/', indexRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`App listening on port ${port}`)
})