const express = require('express');
const dbConnect = require('./config/DatabaseConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRoutes = require('./routes/AuthRoutes');
const bodyParser = require('body-parser');
const { NotFound, errorHandler } = require('./middlewares/ErrorHandler');

// database config
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// using authRoutes
app.use('/api/user', authRoutes);

app.use(NotFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log("server is runnig ");

});