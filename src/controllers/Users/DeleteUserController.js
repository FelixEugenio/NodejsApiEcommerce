const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {ValidateMongoDbId} = require('../../utils/ValidateMongoDbId');

const DeleteUserController = asyncHandler(async(req,res)=>{

try{
const {id} = req.params;
ValidateMongoDbId(id);

const DeleteUser = await User.findByIdAndDelete(id);

return res.json(DeleteUser);


}catch(err){
    throw new Error(err);

}

})

module.exports = {DeleteUserController};