const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const UpdateUserController = asyncHandler(async(req,res)=>{

try{
const {id} = req.params;

const UpdateSingleUser = await User.findByIdAndUpdate(id,{
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