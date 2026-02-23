import bcrypt from 'bcrypt'
import 'dotenv/config'

const passcode = process.env.PASSCODE
const hash = await bcrypt.hash(passcode, 10)
console.log(hash)