const mongoose = require("mongoose");
const validator = require ("validator");


const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }},
        mobile:{
            type:Number,
            required:true,
            unique:true,
            minLength:10
        }, 
    address:{
        type:String,
        required:true,
    }
});

const Employee = new mongoose.model("Employee",employeeSchema);

module.exports = Employee;