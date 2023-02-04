require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
// const path = require('path')
// const request = require('request').defaults({ encoding: null })
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const verifyJWT = require('./middleware/verifyJwt')
const credentials = require('./middleware/credentials')

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

// middleware for cookies
app.use(cookieParser())

// app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/transfer', require('./routes/portal'))
// app.use('/pdfTransfer', require('./routes/pdf'))
app.use(verifyJWT)
// app.use('/decode', require('./routes/decode'))

// app.get('/test', function (req, res) {
//   res.send('test')
// })


module.exports = {
  path: '/api',
  handler: app,
}
