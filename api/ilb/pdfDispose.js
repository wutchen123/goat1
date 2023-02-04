const path = require('path')
const Pdfmake = require('pdfmake')
const axios = require('axios').default
const val2 = require('./textvalueDispose')

const fonts = {
  THSarabunNew: {
    normal: path.join(__dirname, './fonts', '/THSarabunNew.ttf'),
    bold: path.join(__dirname, './fonts', '/THSarabunNew Bold.ttf'),
    italics: path.join(__dirname, './fonts', '/THSarabunNew Italic.ttf'),
    bolditalics: path.join(__dirname, 'fonts', '/THSarabunNew BoldItalic.ttf'),
  },
}
async function getBase64ImageFromURL(url) {
  const image = await axios.get(url, { responseType: 'arraybuffer' })
  const b64img = Buffer.from(image.data).toString('base64')
  const data = 'data:image/jpeg;base64,' + b64img
  return data.toString()
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
module.exports = async function pdf2(data) {
  const pdfmake = new Pdfmake(fonts)
  // console.log(data);
  // console.log(data.Ecname.length)
  // const name = data.Ecname
  // for (let i = 0; i < name.length; i++) {
  //   const result = name[i].n;
  //   console.log(result);
  // }
  const newName = data.Ecname

  const addtext = []
  for (let index = 0; index < newName.length; index++) {
    addtext.push({ text: newName[index].n })
  }
  // console.log(addtext)
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
      { text: 'แบบบันทึกของผู้กำจัดสิ่งปฏิกูล', style: 'header_20_center' },
      val2.valline1(data.name_site),
      {
        text: '\nชื่อหน่วยงาน/ผู้ประกอบการกำจัดสิ่งปฏิกูล......................................................................................................................................',
        style: 'content_16',
      },
      val2.valline2(data.numDucument_site),
      {
        text: 'หมายเลขขออนุญาตของผู้ประกอบการ............................................................อนุญาตโดย.........................................................',
        style: 'content_16',
      },
      val2.valline2_2(data.allow_site),
      {
        text: 'ที่อยู่บ้านเลขที่......................................หมู่ที่...................................ตำบล.......................................อำเภอ...................................',
        style: 'content_16',
      },
      val2.valline3(data.Address_site),
      val2.valline3_2(data.group_site),
      val2.valline3_3(data.Subdistrict_site),
      val2.valline3_4(data.District_site),
      {
        text: 'จังหวัด..........................................................................โทรศัพท์...................................................................................................',
        style: 'content_16',
      },
      val2.valline4(data.Province_site),
      val2.valline4_2(data.phone_site),
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
      val2.valline5(data.name_sewage),
      {
        text: '\nชื่อหน่วยงาน/ผู้ประกอบการขนสิ่งปฏิกูล......................................................................................................................................',
        style: 'content_16',
      },

      {
        text: 'หมายเลขขออนุญาตของผู้ประกอบการ............................................................อนุญาตโดย.........................................................',
        style: 'content_16',
      },
      val2.valline6(data.numDucument_sewage),
      val2.valline6_2(data.allow_sewage),
      {
        text: 'ที่อยู่บ้านเลขที่......................................หมู่ที่...................................ตำบล.......................................อำเภอ...................................',
        style: 'content_16',
      },
      val2.valline7(data.Address_sewage),
      val2.valline7_2(data.group_sewage),
      val2.valline7_3(data.Subdistrict_sewage),
      val2.valline7_4(data.District_sewage),
      {
        text: 'จังหวัด..........................................................................โทรศัพท์...................................................................................................',
        style: 'content_16',
      },
      val2.valline8(data.Province_sewage),
      val2.valline8_2(data.phone_sewage),
      {
        text: 'หมายเลขทะเบียนรถดูดสิ่งปฏิกูล..................................................................................................................................................',
        style: 'content_16',
      },
      val2.valline9(data.carname),
      {
        text: 'ชื่อคนขับรถ....................................................................................โทรศัพท์.................................................................................',
        style: 'content_16',
      },
      val2.valline10(data.driver),
      val2.valline10_2(data.driver_phone),
      {
        text: 'ชื่อคนเก็บขน..................................................................................โทรศัพท์.................................................................................',
        style: 'content_16',
      },
      val2.valline11(data.chipper),
      val2.valline11_2(data.chipper_phone),
      {
        text: 'ได้นำสิ่งปฏิกูลส่งให้ หน่วยงาน/ผู้ประกอบการกำจัดสิ่งปฏิกูล ณ อาคารสถานที่ ตามที่ระบุข้างต้นนี้เพื่อดำเนินการกำจัด',
        style: 'content_16',
      },
      {
        text: 'การบันทึกการปฏิบัติงาน',
        style: 'content_18',
      },
      {
        style: 'table',
        table: {
          headerRows: 1,
          widths: [80, 80, 80, 230],
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

              { text: 'ลงชื่อผู้ขอรับบริการ', style: 'content_16_center' },
            ],
            [
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },
              { text: '                        ', style: 'content_16_center' },

              {
                ol: addtext,

                style: 'content_16',
              },
            ],
          ],
        },
      },
      val2.valline12(`${data.RdDateIn}`),
      val2.valline12_2(`${data.Total_Elimination}`),
      val2.valline12_3(`${data.RdTimeIn}`),
      // val2.valline12_4(data.Ecname.length),

      // val2.valline12_5(data.Ecname),
      // val2.valline12_6(data.Ecname),
      // val2.valline12_7(data.Ecname),
      {
        text: `\nทั้งนี้ ได้แนบสำเนาแบบบันทึกของผู้ขนสิ่งปฏิกูลจำนวน ${data.Ecname.length} ฉบับ เพื่อประกอบกับแบบบันทึกของผู้กำจัดสิ่งปฏิกูลมาด้วยแล้ว `,
        style: 'content_16',
      },

      {
        columns: [
          { text: '' },
          { text: '' },
          [
            {
              columns: [
                
                { text: '\n\nลงชื่อ' },
                {
                  image: await getBase64ImageFromURL(
                    data.RdSignatureEmployeeURL
                  ),
                  // absolutePosition: { x: 370, y: 540 },
                  width: 60,
                  height: 60,
                },
                {
                  text: '\n\nผู้ขนสิ่งปฏิกูล',
                },
              ],
            },
          ],
        ],
      },
      // val2.valline13('สมชาย'),
      // {
      //   image: await getBase64ImageFromURL(data.RdSignatureEmployeeURL),
      //   absolutePosition: { x: 370, y: 540 },
      //   width: 80,
      //   height: 80,
      // },
      {
        columns: [
          {
            text: ' ',
          
          },
          {
            text: ' ',
          },
          {
            text: `(.............${data.driver}................. )\n`,
            style: 'content_16_center',
          },
        ],
      },
      // val2.valline14(`${data.name_site}`),
      {
        style: 'tableExample',
        table: {
          widths: [125, 360],
          headerRows: 1,
          body: [
            [
              {
                text: 'คำรับรองของผู้ขนสิ่งปฏิกูล :',
                style: 'content_16_bold',
              },
              {
                text: 'ข้าพเจ้าขอรับรองว่าได้รับสิ่งปฏิกูลตาม วัน/เวลา/ปริมาณ ที่ระบุไว้ในตาราง ข้างต้นจริง และได้กำจัดตามข้อกำหมดของกฏหมาย',
                style: 'content_16',
              },
            ],
          ],
        },
        layout: 'noBorders',
      },
      {
        columns: [
          { text: '' },
          { text: '' },
          [
            {
              columns: [
                
                { text: '\n\nลงชื่อ' },
                {
                  image: await getBase64ImageFromURL(
                    data.RdSignatureStoreClerkURL
                  ),
                  // absolutePosition: { x: 370, y: 540 },
                  width: 60,
                  height: 60,
                },
                {
                  text: '\n\nผู้กำจัดสิ่งปฏิกูล',
                },
              ],
            },
          ],
        ],
      },
      // {
      //   columns: [
      //     {
      //       text: ' ',
      //     },
      //     {
      //       //   rows:[
      //       //   {
      //       //     image: await getBase64ImageFromURL(data.RdSignatureStoreClerkURL),
      //       //     // absolutePosition: { x: 370, y: 660 },
      //       //     width: 80,
      //       //     height: 80,
      //       //   },{
      //       //     text: '\nลงชื่อ.........................................................ผู้กำจัดสิ่งปฏิกูล ',
      //       //     style: 'content_16_center',
      //       //   }
      //       // ]
      //     },
      //   ],
      // },
      // val2.valline15('สมหวัง'),

      {
        columns: [
          {
            text: ' ',
          },
          {
            text: ' ',
          },
          {
            text: `( .....................${data.name_site}.................  )\n`,
            style: 'content_16_center',
          },
        ],
      },
      // val2.valline16(`${data.driver}`),
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
  // pdfDoc.pipe(fs.createWriteStream('Dispose.pdf'))
  // pdfDoc.end()
}
