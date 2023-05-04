const mogoose = require('mongoose');

// MongoDB configuration

const dbConnect = () =>{

    // connection to database
    try{
        const connection = mogoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");

    } catch(err){
        throw new Error(err);
    }

}

module.exports = dbConnect;