const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {ValidateMongoDbId} = require('../../utils/ValidateMongoDbId');

const UnBlockUserController = asyncHandler(async (req,res)=>{

    const {id} = req.params;
    ValidateMongoDbId(id);
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