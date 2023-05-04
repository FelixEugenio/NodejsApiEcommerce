const jwt = require('jsonwebtoken');

const RefreshToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:'1d'});
}

module.exports = {RefreshToken};