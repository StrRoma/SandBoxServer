const bcryptjs = require('bcryptjs');

function createPasswordHashSync(password) {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
}

module.exports = {
    createPasswordHashSync
}