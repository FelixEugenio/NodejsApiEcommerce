const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');
const {ValidateMongoDbId} = require('../../utils/ValidateMongoDbId');

const UpdateUserController = asyncHandler(async(req,res)=>{

try{
const {_id} = req.user;

ValidateMongoDbId(_id);

const UpdateSingleUser = await User.findByIdAndUpdate(_id,{
    firstname:req?.body?.firstname,
    lastname:req?.body?.lastname,
    email:req?.body?.email,
    mobile:req?.body?.mobile,
},{
    new:true,
});

return res.json(UpdateSingleUser);


}catch(err){
    throw new Error(err);

}

})

module.exports = {UpdateUserController};