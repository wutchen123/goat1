const allowedOrigins = require('../config/allowedOrigins');

const credentials = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = credentials