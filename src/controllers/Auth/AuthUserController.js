const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../../config/jwtConfig');
const {RefreshToken } = require('../../config/RefreshToken');
const jwt = require('jsonwebtoken');


const LoginUserController = asyncHandler(async(req,res)=>{

    // get email and password from req.body 
const {email,password} = req.body;

// check User Not Exists
const FindUser = await User.findOne({email:email});

if(FindUser && (await FindUser.isPasswordMatched(password))){

    const refreshToken = await RefreshToken(FindUser?.id);

    const updateuser = await User.findByIdAndUpdate(

        FindUser._id,
        {
        refreshToken:refreshToken
        },
        {
            new:true
        }
    );

    res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        maxAge:72*60*60*1000,
    })
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

// refreshToken
const HandleRefreshTokenController= asyncHandler(async(req,res)=>{

    const cookie = req.cookies;
    console.log(cookie);

    if(!cookie?.refreshToken){
    throw new Error('No Refresh Token in cookie');
    }

    const refreshToken = cookie.refreshToken;
    console.log(refreshToken);
    const user = await User.findOne({refreshToken});
    if(!user){
        throw new Error('No Refresh token present in db or not matched');
    }

    jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decoded=>{
      if(err || user.id !== decoded.id){
        throw new Error('There is something wrong refresh token')
      }

      const accessToken = generateToken(user?._id);
      res.json({accessToken});
     }))

     

})

module.exports = {LoginUserController,HandleRefreshTokenController};