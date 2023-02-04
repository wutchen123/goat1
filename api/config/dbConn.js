const mysql = require('mysql2')

const pool = mysql.createPool({
  host: "127.0.0.1",
  user:"root",
  password: "12345",
  database: "chan",
  charset: 'utf8mb4',
  timezone: '07:00',
})

const sqlcmd = (options, value = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, conn) {
      if (err) {
        throw err
      } else {
        conn.query(options, value, function (error, results, fields) {
          // console.log(results);
          if (error) {
            reject(error)
          } else {
            resolve(JSON.parse(JSON.stringify(results)))
          }
          conn.release()
        })
      }
    })
  })
}

module.exports = {
  sqlcmd,
}
