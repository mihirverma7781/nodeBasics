const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mens-sprint",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to mongodb");
})
.catch((err)=>{
    console.log(err)
})