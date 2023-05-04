const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const LogoutUserController = asyncHandler(async(req,res)=>{

    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error('No refresh Token in Cookie')
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie('refreskToken',{
            httpOnly:true,
            secure:true
        });
        return res.sendStatus(204)

    }
    await User.findByIdAndUpdate(refreshToken,{
        refreshToken:"",
    });
    res.clearCookie('refreskToken',{
        httpOnly:true,
        secure:true
    });
    return res.sendStatus(204)
})

module.exports = {LogoutUserController};
