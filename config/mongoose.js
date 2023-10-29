const mongoose = require('mongoose');

const DB = "mongodb+srv://manojpant097:mania1234@cluster0.a9wzm3t.mongodb.net/employee_review_system?retryWrites=true&w=majority";

mongoose.connect(DB)
.then(
    ()=>{
        console.log("DataBase Connected");
    },
    (err)=>{
        console.log("error creating in DB", err);
    }
)


module.exports = mongoose;