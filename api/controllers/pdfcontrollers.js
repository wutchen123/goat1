// import { unlink } from 'fs'
// const fs = require('fs')
// const mkdirp = require('mkdirp')
const TransferPDF = require('../models/pdfTransfer')
// const pdfTrans = require('../ilb/pdf')


const datapdfDisposal = async (req, res, next) => {
    // console.log(req.query)
    const data = req.query
   
    const DisposalPDF = await TransferPDF.showpdfDisposal(data)
    console.log(DisposalPDF)
    // const id = new Date()
    // const dir = process.env.foderFile
    // // console.log(dir);
    // //   const made = mkdirp.sync(`${dir}/full`)
    // // console.log(`made directories, starting with ${made}`)
    // // mkdirp(`${dir}/FilePDF/${id.getFullYear() + 543}/${id.getMonth() + 1}`).then(made =>
    // //   console.log(`made directories, starting with ${made}`))
    // mkdirp.sync(`${dir}/FilePDF/${id.getFullYear() + 543}/${id.getMonth() + 1}`)
  
    // if (
    //   fs.existsSync(
    //     `${dir}/FilePDF/${id.getFullYear() + 543}/${id.getMonth() + 1}/${
    //         DisposalPDF[0].RdID
    //     }.pdf`
    //   )
    // ) {
    //   unlink(
    //     `${dir}/FilePDF/${id.getFullYear() + 543}/${id.getMonth() + 1}/${
    //         DisposalPDF[0].RdID
    //     }.pdf`,
    //     (err, response) => {
    //       // console.log(response);
    //       if (err) throw err
    //       // console.log(
    //       //   "successfully deleted waste-file " +
    //       //  `${dir}/waste-file/${id.getFullYear() + 543}/${
    //       //    id.getMonth() + 1
    //       //  }/${FIND_TSD_ID}.pdf`
    //       // );
    //     }
    //   )
    // }
    // const PDFfile = await pdfTrans(DisposalPDF)
    // PDFfile.pipe(
    //   fs.createWriteStream(
    //     `${dir}/FilePDF/${id.getFullYear() + 543}/${id.getMonth() + 1}/${
    //         DisposalPDF[0].RusID
    //     }.pdf`
    //   )
    // )
    // PDFfile.end()
    res.status(200).send('200 ok')
  }
module.exports = {
    datapdfDisposal
}
    