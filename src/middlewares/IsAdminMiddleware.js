const asyncHandler = require('express-async-handler');
const User = require('../models/Users/UserModels');

const IsAdminMiddleware = asyncHandler(async(req,res,next)=>{

    const {email} = req.user;
    const adminUser = await User.findOne({email});

    if(adminUser.role !== "admin"){
        throw new Error('You are Not Admin')
    }else{
        return next();
    }

})

module.exports = {IsAdminMiddleware};