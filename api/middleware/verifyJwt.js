const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const Auth = require('../models/auth')
const publicKEY = fs.readFileSync(path.join(__dirname, '../certs/public.pem'))

function handleJWT(token, accessKey) {
  try {
    const decoded = jwt.verify(token, accessKey)
    return { payload: decoded, expired: false }
  } catch (error) {
    return {
      payload: null,
      expired: error.message.includes('jwt expired') || true,
    }
  }
}
const verifyJWT = async (req, res, next) => {
  // console.log(req);
  const { accessToken, refreshToken } = req.cookies
  if (!refreshToken) return res.sendStatus(401)
  const { payload, expired } = handleJWT(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET
  )
  // console.log(payload,expired);
  if (payload) {
    req.user = payload.UserInfo.LoginUsername
    // req.user = payload.UserInfo.UsID
    // console.log(req.user);
    return next()
  }
  const { payload: refresh } = expired && refreshToken ? handleJWT(refreshToken, publicKEY) : { payload: null }

  if (!refresh) return res.sendStatus(401)
  let foundUser = null
  foundUser = await Auth.findByparam({ TOKEN: refreshToken })

  if (foundUser.length <= 0) return res.sendStatus(403)
  const newAccessToken = jwt.sign(
    {
      UserInfo: {
        LoginUsername: foundUser[0].LoginUsername,
        // UsID: foundUser[0].UsID
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15s' }
  )
  // console.log(newAccessToken);
  res.cookie('accessToken', newAccessToken, {
    maxAge: 24 * 60 * 60 * 1000, // 5 minutes
    httpOnly: true,
  })

  const Newpayload = handleJWT(newAccessToken, process.env.ACCESS_TOKEN_SECRET)     
  
  req.user = Newpayload.payload.UserInfo
  // console.log(req.user);
  return next()
}

module.exports = verifyJWT
