const mongoose = require('mongoose');

const ValidateMongoDbId = (id =>{
    const IsValid = mongoose.Types.ObjectId.IsValid(id);
    if(!IsValid){
     throw new Error('This id is not valid or not found');
    }

})

module.exports = {ValidateMongoDbId};