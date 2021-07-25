const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/registration-form",{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err);
})