const moment = require('moment')
module.exports.valline1 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 220, y: 87 },
  };
};

module.exports.valline2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 220, y: 108 },
  };
};

module.exports.valline2_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 420, y: 108 },
  };
};

module.exports.valline3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 130, y: 129 },
  };
};

module.exports.valline3_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 240, y: 129 },
  };
};

module.exports.valline3_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 350, y: 129 },
  };
};

module.exports.valline3_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 470, y: 129 },
  };
};

module.exports.valline4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 150 },
  };
};
module.exports.valline4_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 320, y: 150 },
  };
};

module.exports.valline5 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 230, y: 210 },
  };
};

module.exports.valline6 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 230, y: 232 },
  };
};

module.exports.valline6_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 430, y: 232 },
  };
};

module.exports.valline7 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 120, y: 253 },
  };
};

module.exports.valline7_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 240, y: 253 },
  };
};
module.exports.valline7_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 360, y: 253 },
  };
};
module.exports.valline7_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 480, y: 253 },
  };
};

module.exports.valline8 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 100, y: 273 },
  };
};
module.exports.valline8_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 340, y: 273 },
  };
};

module.exports.valline9 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 230, y: 295 },
  };
};

module.exports.valline10 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 130, y: 316 },
  };
};

module.exports.valline10_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 370, y: 316 },
  };
};
module.exports.valline11 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 130, y: 337 },
  };
};

module.exports.valline11_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 370, y: 337 },
  };
};
function formatdate(data) {
  return moment(data).add('y', 543).format('DD/MM/YYYY')
}
module.exports.valline12 = function (data) {
  return {
    text: formatdate(data),
    absolutePosition: { x: 65, y: 455 },
  };
};
module.exports.valline12_2 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 165, y: 455 },
  };
};

module.exports.valline12_3 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 253, y: 455 },
  };
};

module.exports.valline12_4 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 275, y: 538 },
  };
};

// module.exports.valline12_5 = function (data) {
//   // const name = data.Ecname
//   // let result = []
//   // for (let i = 0; i < data.length; i++) {
//   //    result = data[i].n;
//   //   // console.log(result);
//   // }
//    return {
   
//     text: data[0] === undefined ? '' : data[0].n,
//     absolutePosition: { x: 400, y: 451 },
//   };
// };

// module.exports.valline12_6 = function (data) {
//   return {
//     text: data[1] === undefined ? '' : data[1].n,
//     absolutePosition: { x: 400, y: 471 },
//   };
// };

// module.exports.valline12_7 = function (data) {
//   return {
//     text: data[2] === undefined ? '' : data[2].n,
//     absolutePosition: { x: 400, y: 492 },
//   };
// };
module.exports.valline13 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 390, y: 580 },
  };
};

module.exports.valline14 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 385, y: 600 },
  };
};


module.exports.valline15 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 390, y: 708 },
  };
};

module.exports.valline16 = function (data) {
  return {
    text: data,
    absolutePosition: { x: 385, y:728 },
  };
};
