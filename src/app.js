import express from 'express'
import indexRouter from './routes/index.js'
import postRouter from './routes/post.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/post', postRouter)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`App listening on port ${port}`)
})