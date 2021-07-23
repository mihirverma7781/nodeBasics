const express = require("express");
const router = new express.Router();
const Employee = require("../models/employee");
router.post('/employee',(req, res)=>{
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
    router.get('/employee',(req, res)=>{
        const result = Employee.find().
        then((result)=>{
            res.send(result);
            console.log(result)
        })
        .catch((err)=>{
        res.send(err);
        console.log(err);
        })
    })
    
    // get a user
    router.get('/employee/:username',(req, res)=>{
        const username = req.params.username;
        const result = Employee.find({username:username}).
        then((result)=>{
            res.send(result);
            console.log(result)
        })
        .catch((err)=>{
        res.send(err);
        console.log(err);
        })
    })
    
    
    // updating a user
    router.patch('/employee/:id',(req, res)=>{
        const _id = req.params.id;
        const result = Employee.findByIdAndUpdate(_id,req.body,{
            new:true,
        }).
        then((result)=>{
            res.send(result);
            console.log(result)
        })
        .catch((err)=>{
        res.send(err);
        console.log(err);
        })
    })
    
    
    
    // deleting a user
    router.delete('/employee/:id',(req, res)=>{
        const id = req.params.id
        const result = Employee.findByIdAndDelete(id)
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            res.send(err); 
        })
    })

module.exports = router;