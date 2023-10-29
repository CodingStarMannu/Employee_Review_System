const express = require("express");
const app = express();

const port = 8000;




app.listen(port,(error)=>{
 if(error){
    console.log("Error in listening port", error);
 }
 console.log(`App is running on Port: ${port}`);
})
