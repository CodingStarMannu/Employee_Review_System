const express = require("express");
const app = express();
const routes = require('./routes/index.js');
require('./config/mongoose');


const port = 8000;

app.use(express.urlencoded());

app.use('/', routes);



app.listen(port,(error)=>{
 if(error){
    console.log("Error in listening port", error);
 }
 console.log(`App is running on Port: ${port}`);
})
