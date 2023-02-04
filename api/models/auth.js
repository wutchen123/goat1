const { sqlcmd } = require('../config/dbConn')

class Auth {    
    constructor(args) {
        Object.assign(this, args);
    }

    static findByparam(findkey) {
        const query = "SELECT User.*,Login.LoginUsername,Login.LoginPassword FROM User LEFT JOIN Login ON User.UsID = Login.UsID WHERE "  + Object.keys(findkey).map(key => `${key} = ?`).join("AND ")
        const param = [...Object.values(findkey)];
        // console.log(param);
        return sqlcmd(query,param);
    }

    update(updatekey) {
        const query = "UPDATE User SET " + Object.keys(this).map(key => `${key} = ?`).join(", ") + " WHERE UsID = '"+ updatekey.UsID+"'";
        // console.log(updatekey.UsID);
        const param = [...Object.values(this), ...Object.values(updatekey)];
        // console.log(param);
        return sqlcmd(query, param);
    }


   
}

module.exports = Auth;
