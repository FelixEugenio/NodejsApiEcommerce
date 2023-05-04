const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {ValidateMongoDbId} = require('../../utils/ValidateMongoDbId');

const GetSingleUserController = asyncHandler(async(req,res)=>{

try{
const {id} = req.params;
ValidateMongoDbId(id);

const GetSingleUser = await User.findById(id);

return res.json(GetSingleUser);


}catch(err){
    throw new Error(err);

}

})

module.exports = {GetSingleUserController};