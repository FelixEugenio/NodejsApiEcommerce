const { Error } = require("mongoose")

// Not Found
const NotFound = (req,res,next) =>{
    const error = new Error('Not Found');
    res.status(404);
    next(error);
}

// Error Handler 
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode=== 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err?.message,
        stack:err?.stack,
    })
}

module.exports = {NotFound,errorHandler};