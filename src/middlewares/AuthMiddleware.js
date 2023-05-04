const User = require('../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const AuthMiddleware = asyncHandler(async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error:'Token not Provided'});
    }

    const [,token] = authHeader.split(' ');

    try{

        const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
    
       req.user = user;
    
        return next();
    
       }catch(err){
        return res.status(401).json({error:'Token not invalid'});
    
       }

})

module.exports = {AuthMiddleware};