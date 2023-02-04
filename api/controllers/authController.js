const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Auth = require('../models/auth')
const privateKey = fs.readFileSync(path.join(__dirname, '../certs/private.pem'))

const Login = async (req, res, next) => {
  const { Username, password } = req.body
  // console.log( 'login-----------------------------------------------------------------------------------')
  // console.log(Username, password)

  // console.log(__dirname)
  if (!Username || !password) return res.sendStatus(400)

  const users = await Auth.findByparam({ LoginUsername: Username })
  // console.log(users);
  if (users.length === 0) return res.sendStatus(401)
  const match = await bcrypt.compare(password, users[0].LoginPassword)
  // console.log(privateKey.toString())
  // console.log(match)
  if (match) {
    try {
      const accessToken = jwt.sign(
        {
          UserInfo: {
            LoginUsername: users[0].LoginUsername,
            UsID: users[0].UsID,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
      )

      const refreshToken = jwt.sign(
        {
          UserInfo: {
            Username: users[0].LoginUsername,
            UsID: users[0].UsID,
          },
        },
        privateKey,
        { expiresIn: '1d', algorithm: 'RS256' }
      )
      const mperson = new Auth({ TOKEN: refreshToken })
      mperson.update({ UsID: users[0].UsID })
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      }) // secure: true
      // console.log(users)
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>   : ', users[0].UsID)
      res.status(200).send({ UsID: users[0].UsID, UsType: users[0].UsType })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.sendStatus(401)
  }
}

module.exports = { Login }
