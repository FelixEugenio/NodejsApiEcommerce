const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../../config/jwtConfig');

const LoginUserController = asyncHandler(async(req,res)=>{

    // get email and password from req.body 
const {email,password} = req.body;

// check User Not Exists
const FindUser = await User.findOne({email:email});

if(FindUser && (await FindUser.isPasswordMatched(password))){
   res.json({
    _id:FindUser?._id,
    firstname:FindUser?.firstname,
    lastname:FindUser?.lastname,
    email:FindUser?.email,
    mobile:FindUser?.mobile,
    token:generateToken(FindUser?._id)
   });
}else{
    throw new Error("Invalid Credentials");
}

})

module.exports = {LoginUserController}