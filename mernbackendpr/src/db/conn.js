const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/singer-reg",{
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=>{
    console.log("connected to MongoDB")
})
.catch(err=>console.log("Error connecting to MongoDB"))