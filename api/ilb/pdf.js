const path = require('path')
// const { Image } = require('canvas')
const Pdfmake = require('pdfmake')
// const val = require('./textvalue')
const axios = require('axios').default;
// const request = require('request').defaults({ encoding: null })

const val = require('./textvalue')


// function getUrltobase(url) {
//   request.get(url, function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       const data =
//         'data:' +
//         response.headers['content-type'] +
//         ';base64,' +
//         Buffer.from(body).toString('base64')
//       // console.log('.....................',data)

//       return data
//     }
//   })

// }
const fonts = {
  THSarabunNew: {
    normal: path.join(__dirname, './fonts', '/THSarabunNew.ttf'),
    bold: path.join(__dirname, './fonts', '/THSarabunNew Bold.ttf'),
    italics: path.join(__dirname, './fonts', '/THSarabunNew Italic.ttf'),
    bolditalics: path.join(__dirname, 'fonts', '/THSarabunNew BoldItalic.ttf'),
  },
}

// function genarateText(tx, st) {
//   var data = {
//     text: `${tx}`,
//     style: `${st}`,
//     pageBreak: '',
//   }
//   // console.log(data);
//   return data
// }
async function getBase64ImageFromURL(url) {
  const image = await axios.get(url, { responseType: 'arraybuffer' })
  const b64img = Buffer.from(image.data).toString('base64')
  const data = 'data:image/jpeg;base64,' + b64img
  return data.toString()
}


module.exports = async function pdf1(data) {
  // console.log( data.RusSignatureGuestUserURL)
 
  const pdfmake = new Pdfmake(fonts)
  const docDefinationAI = {
    pageSize: 'A4',
    footer(currentPage, pageCount) {
      return {
        columns: [
          // { text: "ท้ายกระดาษ", fontSize: 15, alignment: "center" },
          {
            text:
              //   "หน้าที่ " +
              currentPage.toString(),
            //   +
            //   " จาก " +
            //   pageCount +
            //   " หน้า"
            margin: [5, 5, 15, 5],
            alignment: 'right',
          },
        ],
      }
    },

    content: [
      { text: 'แบบบันทึกของผู้ขนสิ่งปฏิกูล', style: 'header_20_center' },
      val.valline1(`${data.Usname}`),
      {
        text: '\nชื่อหน่วยงาน/ผู้ประกอบการขนสิ่งปฏิกูล......................................................................................................................................',
        style: 'content_16',
      },
      val.valline2(`${data.UsnumDucument}`),
      {
        text: 'หมายเลขขออนุญาตของผู้ประกอบการ............................................................อนุญาตโดย.........................................................',
        style: 'content_16',
      },
      val.valline2_2(`${data.Usallow}`),
      {
        text: 'ที่อยู่บ้านเลขที่......................................หมู่ที่...................................ตำบล.......................................อำเภอ...................................',
        style: 'content_16',
      },
      val.valline3(`${data.UsAddress}`),
      val.valline3_2(`${data.Usgroup}`),
      val.valline3_3(`${data.UsSubdistrict_name}`),
      val.valline3_4(`${data.UsDistrict_name}`),
      {
        text: 'จังหวัด..........................................................................โทรศัพท์...................................................................................................',
        style: 'content_16',
      },
      val.valline4(`${data.UsProvince_name}`),
      val.valline4_2(`${data.Usnumberphone}`),
      {
        text: 'หมายเลขทะเบียนรถดูดสิ่งปฏิกูล..................................................................................................................................................',
        style: 'content_16',
      },
      val.valline5(`${data.carname}`),
      {
        text: 'ชื่อคนขับรถ....................................................................................โทรศัพท์.................................................................................',
        style: 'content_16',
      },
      val.valline6(`${data.driver}`),
      val.valline6_2(`${data.driver_phone}`),

      {
        text: 'ชื่อคนเก็บขน..................................................................................โทรศัพท์.................................................................................',
        style: 'content_16',
      },
      val.valline7(`${data.chipper}`),
      val.valline7_2(`${data.chipper_phone}`),

      {
        canvas: [
          {
            lineColor: 'gray',
            type: 'line',
            x1: 0,
            y1: 20,
            x2: 515,
            y2: 20,
            lineWidth: 2,
          },
        ],
      },
      {
        text: '\nผู้ขอรับบริการ ชื่อ-สกุล (นาย/นาง/นางสาว)................................................................................................................................\nชื่อและประเภทอาคาร...................................................................................................................................................................',
        style: 'content_16',
      },
      val.valline8(`${data.RusfirstName} ${data.RuslastName}`),
      val.valline9(`${data.RusTypeBuilding}`),
      {
        text: 'ที่อยู่บ้านเลขที่..................................หมู่ที่..............ถนน......................ตำบล...................................อำเภอ...................................\nจังหวัด..........................................................................โทรศัพท์...................................................................................................',
        style: 'content_16',
      },
      val.valline10(`${data.RusAddress}`),
      val.valline10_2(`${data.Rusgroup}`),
      val.valline10_3('-'),
      val.valline10_4(`${data.RusSubdistrict_name}`),
      val.valline10_5(`${data.RusDistrict_name}`),
      val.valline11(`${data.RusProvince_name}`),
      val.valline11_2(`${data.Rusnumberphone}`),
      {
        text: 'มีคามประสงค์ให้เจ้าหน้าที่ของหน่วยงาน/ผู้ประกอบการดังกล่าว เข้าทำการสูบสิ่งปฏิกูล ณ อาคาร สถานที่ตามที่ระบุข้างต้น นี้',
        style: 'content_16',
      },
      {
        columns: [
          {
            text: ' ',
          },
          {
            text: 'ลงชื่อ.........................................................ผู้ขอรับบริการ ',
            style: 'content_16_center',
          },
        ],
      },

      {
        image: await getBase64ImageFromURL(data.RusSignatureGuestUserURL),
        absolutePosition: { x: 370, y: 370 },
        width: 60,
        height:60,
      },
      // val.valline12(data.RusSignatureGuestUserURL),
      {
        columns: [
          {
            text: ' ',
          },
          {
            text: '(.................................................................)',
            style: 'content_16_center',
          },
        ],
      },
      val.valline13(`${data.RusfirstName} ${data.RuslastName}`),
      {
        text: 'การบันทึกการปฏิบัติงาน',
        style: 'content_18',
      },
      {
        style: 'table',
        table: {
          headerRows: 1,
          widths: [94, 94, 94, 94, 94],
          // dontBreakRows: true,
          // keepWithHeaderRows: 1,
          body: [
            [
              { text: 'วัน/เดือน/ปี', style: 'content_16_center' },
              {
                text: 'ปริมาณสิ่งปฏิกูล\n(ลูกบาศ์กเมตร)',
                style: 'content_16_center',
              },
              { text: 'เวลาเข้าสูบ', style: 'content_16_center' },
              { text: 'เวลาออก', style: 'content_16_center' },
              { text: 'ลงชื่อผู้ขอรับบริการ', style: 'content_16_center' },
            ],
            [
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },
            ],
          ],
        },
      },
      val.valline14(`${data.RusDateIn }`),
      val.valline14_2(`${data.RusAmount}`),
      val.valline14_3(`${data.RusTimeIn}`),
      val.valline14_4(`${data.RusTimeOut}`),
      // val.valline14_5(data.RusSignatureGuestUserURL),
      {
        image: await getBase64ImageFromURL(data.RusSignatureGuestUserURL),
        absolutePosition: { x: 470, y: 495 },
        width: 60,
        height: 60,
      },
      {
        style: 'tableExample',
        table: {
          widths: [125, 360],
          headerRows: 1,
          body: [
            [
              {
                text: '\nคำรับรองของผู้ขนสิ่งปฏิกูล :',
                style: 'content_16_bold',
              },
              {
                text: '\nข้าพเจ้าขอรับรองว่าได้ดำเนินการสูบสิ่งปฏิกูลตาม วัน/เวลา/ปริมาณ ที่ระบุไว้ในตาราง ข้างต้นจริง และได้ขนส่งเป็นไปตามข้อกำหมดของกฏหมาย',
                style: 'content_16',
              },
            ],
          ],
        },
        layout: 'noBorders',
      },

      {
        columns: [
          {
            text: ' ',
          },
          {
            text: '\nลงชื่อ.........................................................ผู้ขนสิ่งปฏิกูล ',
            style: 'content_16_center',
          },
        ],
      },
      {
        image: await getBase64ImageFromURL(data.RusSignatureUsercollectURL),
        absolutePosition: { x: 370, y: 595 },
        width: 60,
        height: 60,
      },
      // },
      // val.valline15(data.RusSignatureUsercollectURL),

      {
        columns: [
          {
            text: ' ',
          },
          {
            text: '(.................................................................)',
            style: 'content_16_center',
          },
        ],
      },
      val.valline16(`${data.driver}`),
    ],

    defaultStyle: {
      font: 'THSarabunNew',
    },
    styles: {
      header_20: {
        fontSize: 20,
        alignment: 'left',
        bold: true,
      },
      header_20_center: {
        fontSize: 20,
        alignment: 'center',
        bold: true,
      },
      content_18: {
        fontSize: 18,
        alignment: 'left',
        margin: [0, 0, 0, 0],
        bold: true,
      },
      content_18_right: {
        fontSize: 18,
        alignment: 'right',
        margin: [0, 0, 0, 0],
      },
      content_18_center: {
        fontSize: 18,
        alignment: 'center',
        margin: [0, 0, 0, 0],
      },
      content_18_bold: {
        fontSize: 18,
        alignment: 'left',
        margin: [0, 0, 0, 0],
        bold: true,
      },
      content_18_bold_center: {
        fontSize: 18,
        alignment: 'center',
        margin: [0, 0, 0, 0],
        bold: true,
      },
      content_16: {
        fontSize: 16,
        alignment: 'left',
        margin: [0, 0, 0, 0],
      },
      content_16_right: {
        fontSize: 16,
        alignment: 'right',
        margin: [0, 0, 0, 0],
      },
      content_16_rightmargin: {
        fontSize: 16,
        alignment: 'right',
        margin: [0, 0, 0, 30],
      },
      content_16_center: {
        fontSize: 16,
        alignment: 'center',
        margin: [0, 0, 0, 0],
      },
      content_16_bold: {
        fontSize: 16,
        alignment: 'left',
        margin: [0, 0, 0, 0],
        bold: true,
      },
      content_16_bold_center: {
        fontSize: 16,
        alignment: 'center',
        margin: [0, 0, 0, 0],
        bold: true,
      },
      signature: {
        fontSize: 14,
        alignment: 'center',
        margin: [0, 30, 0, 0],
      },
      table: {
        alignment: 'center',
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black',
      },
    },
  }
  const pdfDoc = pdfmake.createPdfKitDocument(docDefinationAI, {})
  return pdfDoc
  // pdfDoc.pipe(fs.createWriteStream('Sewage.pdf'))
  // pdfDoc.end()
}
