const jwt = require('jsonwebtoken');

async function authenticate({ username, password }) {
    if (username !== "admin" || password !== "abc123") throw 'Username or password is incorrect'; 
 
     // authentication successful
     const token = jwt.sign(
        { 
            sub: 1,
            username: "admin"
        }, 
        process.env.SECRET,
        { expiresIn: '3h' });
     return token;
}

module.exports = {
    authenticate
};

