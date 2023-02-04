// const request = require('request').defaults({ encoding: null })
const moment = require('moment')
module.exports.valline1 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 220, y: 87 },
  }
}

module.exports.valline2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 220, y: 108 },
  }
}

module.exports.valline2_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 420, y: 108 },
  }
}

module.exports.valline3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 110, y: 129 },
  }
}

module.exports.valline3_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 230, y: 129 },
  }
}

module.exports.valline3_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 350, y: 129 },
  }
}

module.exports.valline3_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 470, y: 129 },
  }
}

module.exports.valline4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 150 },
  }
}
module.exports.valline4_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 320, y: 150 },
  }
}

module.exports.valline5 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 200, y: 170 },
  }
}

module.exports.valline6 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 192 },
  }
}

module.exports.valline6_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 360, y: 192 },
  }
}

module.exports.valline7 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 212 },
  }
}

module.exports.valline7_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 360, y: 212 },
  }
}

module.exports.valline8 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 240, y: 273 },
  }
}

module.exports.valline9 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 150, y: 295 },
  }
}

module.exports.valline10 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 120, y: 316 },
  }
}

module.exports.valline10_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 220, y: 316 },
  }
}

module.exports.valline10_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 290, y: 316 },
  }
}

module.exports.valline10_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 370, y: 316 },
  }
}

module.exports.valline10_5 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 480, y: 316 },
  }
}

module.exports.valline11 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 337 },
  }
}

module.exports.valline11_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 320, y: 337 },
  }
}
// const imageToBase64 = require('image-to-base64')

// async function img(url) {
//   let result = ''
//   await imageToBase64(url) // insert image url here.
//     .then((response) => {
//       // console.log(response) // the response will be the string base64.
//       result = response
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//     // console.log('data:image/jpeg;base64,'+ result.toString());
//     return 'data:image/jpeg;base64,'+ result.toString()
// }

// function getBase64ImageFromURL(url) {
//   const img = new Image()
//   return new Promise((resolve, reject) => {
//     img.setAttribute('crossOrigin', 'anonymous')
//     img.onload = () => {
//       const canvas = document.createElement('canvas')
//       canvas.width = img.width
//       canvas.height = img.height
//       const ctx = canvas.getContext('2d')
//       ctx.drawImage(img, 0, 0)

//       const dataURL = canvas.toDataURL('image/png')

//       resolve(dataURL)
//     }

//     img.onerror = (error) => {
//       reject(error)
//     }

//     img.src = url
//   })
// }
module.exports.valline12 =  function (data) {
  // console.log(data)
  // const i = await img(data)
  // console.log(i)
  return {
    // image:await img(data)
  }
}

module.exports.valline13 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 375, y: 419 },
  }
}

function formatdate(data) {
  return moment(data).add('y', 543).format('DD/MM/YYYY')
}
module.exports.valline14 = function (data) {
  return {
    text: formatdate(data),
    absolutePosition: { x: 70, y: 516 },
  }
}

module.exports.valline14_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 185, y: 516 },
  }
}

module.exports.valline14_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 285, y: 516 },
  }
}

module.exports.valline14_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 390, y: 516 },
  }
}

module.exports.valline14_5 = function (data) {
  // const i = img(data)
  // console.log(i)
  return {}
}

module.exports.valline15 = function (data) {
  return {
    // image: img(data),
  }
}

module.exports.valline16 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 379, y: 645 },
  }
}
