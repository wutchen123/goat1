// import { unlink } from 'fs'
// const fs = require('fs')
// const mkdirp = require('mkdirp')
// const bcrypt = require('bcrypt')
// const firebase = require('../plugins/firebaseConfig.js')
const Transfer = require('../models/transfer')
// const pdfTrans = require('../ilb/pdf')
// const pdfTransDisposal = require('../ilb/pdfDispose')
// const pdf = require('../ilb/pdf')

const insert = async (req, res, next) => {
  const body = req.body
  console.log(req.body)
  // const regis = new Transfer({})
  const ad = await Transfer.transinsertUserT(body)
  // console.log(ad)
  res.send(ad)
}

module.exports = {
  insert,
}
