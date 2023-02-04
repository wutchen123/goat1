const { sqlcmd } = require('../config/dbConn')

class Transfer {
  constructor(args) {
    // console.log("ARge-------------------------",args);
    // console.log("this+++++++++++++++",this);
    Object.assign(this, args)
  }

  static transinsertUserT(body) {
    const query = `INSERT INTO User (name, phone, zipcode)
    VALUES ('${body.name}', '${body.phone}', '${body.zipcode}');`
    // const param = [...Object.values(this)]
    // console.log(param)
    return sqlcmd(query)
  }
}

module.exports = Transfer
