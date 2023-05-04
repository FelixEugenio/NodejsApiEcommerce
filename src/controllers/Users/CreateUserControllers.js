const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const CreateUserController = asyncHandler(async (req,res)=>{

  // get email from formulary with req.body;
const email = req.body.email;

// check User already Exists 
const CheckUserAlreadyExists = await User.findOne({
  email:email
});

if(CheckUserAlreadyExists){
    throw new Error('User Already Exists');
}else{
  // Create New User 
  const CreateNewUser = await User.create(req.body);
  return res.json(CreateNewUser);
}
});


module.exports = {CreateUserController};