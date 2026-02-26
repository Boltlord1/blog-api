import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

async function postLogIn(req, res) {
    const passcode = req.body.passcode
    const hash = process.env.PASSCODE_HASH
    const matches = await bcrypt.compare(passcode, hash)
    if (!matches) return res.status(400).json({ matches })
    const secret = process.env.JWT_SECRET
    jwt.sign({ hash, matches }, secret, { expiresIn: '30d' }, (err, token) => {
        if (err) return res.status(400).json({ err })
        res.json({ token })
    })
}

async function verifyToken(req, res, next) {
    const header = req.headers.authorization
    if (!header) return res.status(400).json({ header })
    const bearer = header.split(' ')
    const token = bearer[1]
    const secret = process.env.JWT_SECRET
    jwt.verify(token, secret, (err,  data) => {
        if (err) return res.status(400).json({ err })
        next()
    })
}

export {
    postLogIn,
    verifyToken
}