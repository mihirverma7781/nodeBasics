const mongoose = require("mongoose");
const validator = require("validator");


// defining schema for databse
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }}
    },
    mobile: {
        type:Number,
        required: true,
        minLength:10,
        unique:true,
    },
    address: {
        type:String,
        required: true,
    }
  },
);

// creating a model collection
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;
