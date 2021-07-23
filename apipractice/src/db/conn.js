const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employee-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})
.then(()=>{
    console.log("Connected Successfully")   
})
.catch((err)=>{
    console.log(err)
})