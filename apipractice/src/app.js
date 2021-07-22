const express = require('express');
const mongoose = require("mongoose");
require('./db/conn');   
const Employee = require('./models/employee.js');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); 
app.get('/',(req, res)=>{
    res.send("hello from the express server")
})

app.post('/employee',(req, res)=>{
console.log(req.body)
const user = new Employee(req.body);

user.save().then(()=>{
    console.log("saved to database")
    res.status(201).send(user)
}).catch((err)=>{
    res.status(400).send(err)
    console.log(err)
})
})

// get users
app.get('/employee',(req, res)=>{
    const result = Employee.find(req.body).
    then((result)=>{
        res.send(result);
        console.log(result)
    })
    .catch((err)=>{
    res.send(err);
    console.log(err);
    })
})

app.delete('/employee',(req, res)=>{
    const result = Employee.findByIdAndDelete(req.body)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
})

app.listen(port, ()=>{
    console.log('listening on port '+port+' number');
})

