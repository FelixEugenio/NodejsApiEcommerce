const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const UnBlockUserController = asyncHandler(async (req,res)=>{

    const {id} = req.params;
    try{
        const unblock = await User.findByIdAndUpdate(
            id,
            {
            isBlocked:false
            },
            {
                new:true
            }
        )

        return res.json({message:'User Unblocked '});

    }catch(error){
     throw new Error(error);
    }

});


module.exports = {UnBlockUserController};