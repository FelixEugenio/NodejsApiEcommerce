const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {ValidateMongoDbId} = require('../../utils/ValidateMongoDbId');

const BlockUserController = asyncHandler(async (req,res)=>{

    const {id} = req.params;
    ValidateMongoDbId(id);
    try{
        const block = await User.findByIdAndUpdate(
            id,
            {
            isBlocked:true
            },
            {
                new:true
            }
        )

        return res.json({message:'User Blocked '});

    }catch(error){
     throw new Error(error);
    }

});


module.exports = {BlockUserController};