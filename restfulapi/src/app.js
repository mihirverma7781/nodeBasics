const express = require('express');
const mongoose = require("mongoose");
// imporing the conn from db to check the connection
require('./db/conn');

// importing model
const Student = require("./models/students.js")

// express initialized
const app = express();

// port initialization
const port = process.env.PORT || 8000;

// create a new student

// using middleware express.json for incoming req
app.use(express.json());

// routes initialized
app.post('/students',(req, res) => {
    // res.send("hello from the express server")
    console.log(req.body)
    // getting data from body
    const user = new Student(req.body);
    // saving to database
    user.save().then(() => {
        res.status(201).send(user);
        // console.log("saved to data successfully!")
    }).catch((err) =>{
        res.status(400).send(err);
    });

});
// listening to server
app.listen(port, ()=> {
    console.log("listening to " + port);
})

