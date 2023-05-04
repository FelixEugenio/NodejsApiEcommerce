const User = require('../../models/Users/UserModels');
const asyncHandler = require('express-async-handler');

const ListUsersController = asyncHandler(async (req,res)=>{

    try{
        // List All Users 
    const Users = await User.find();
    return res.json(Users); 

    }catch(err){
        throw new Error(err);
    }

});


module.exports = {ListUsersController};