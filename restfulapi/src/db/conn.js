const mongoose = require('mongoose');

// connecting to database
mongoose.connect("mongodb://localhost:27017/students-api",
{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
// <--------connect method returns a promise ------->
.then(() =>{
    console.log("connected successfully")
})
.catch(err =>{
    console.log(err)
});
