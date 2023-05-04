const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const GetSingleUserController = asyncHandler(async(req,res)=>{

try{
const {id} = req.params;

const GetSingleUser = await User.findById(id);

return res.json(GetSingleUser);


}catch(err){
    throw new Error(err);

}

})

module.exports = {GetSingleUserController};