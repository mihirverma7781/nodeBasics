const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const singerSchema =  mongoose.Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,

    },
    gender:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    confirmpassword:{
        type: String,
        required: true,
    },
});
// hash here
singerSchema.pre("save",async function (next){
// const passwordHash = await bcrypt.hash(password,10);
if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,10);
    this.confirmpassword = undefined;
    next();
}
})

const Singer = new mongoose.model("Singer",singerSchema);
module.exports = Singer;