const mongoose = require('mongoose');

const DB = "mongodb+srv://manojpant097:mania1234@cluster0.a9wzm3t.mongodb.net/employee_review_system?retryWrites=true&w=majority";

mongoose.connect(DB)
.then(()=>{console.log("DataBase Connected");
    }).catch((err)=>{
        console.log("error creating in DB", err);
    });


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  