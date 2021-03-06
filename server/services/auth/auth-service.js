const jwt = require('jsonwebtoken');
const config = require('@config-server/config');

function createToken (userFromDB) {
    const token = jwt.sign({ id: userFromDB.id, role: userFromDB.role }, config.secret, {
        expiresIn: 86400
    })
    return token;
}

function verifyToken(req, res, next) {
    if (req.headers['authorization'] && req.headers['authorization'].length) {
        const token = req.headers['authorization'].replace(/(bearer|jwt)\s+/i, '');
        jwt.verify(token, config.secret, (err, decodeToken) => {
            if (err) {
                return next({ mesage: "Failed to authenticate token", statusCode: 401 });
            }
            req.credentials = { id: decodeToken.id, role: decodeToken.role };
            next();
        })
    } else {
        req.credentials = { role: 'guest' };
        next();
    }
}

module.exports = {
    createToken,
    verifyToken
}