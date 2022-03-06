const jwt = require('express-jwt');

module.exports = authorize;

function authorize() {
    const secret = process.env.SECRET;
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {
            next();
        }
    ];
}