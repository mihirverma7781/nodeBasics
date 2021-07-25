const express  = require('express');
const mongoose = require("mongoose");
const router = new express.Router();
const MensRanking = require('../models/menssprint');

router.get('/',async (req, res)=>{
    res.send("hello from express server");
})

router.post('/mens',async (req, res)=>{
    try{
        const mensDoc = new MensRanking(req.body);
        const result = await mensDoc.save();
        console.log(result);
        res.status(201).send(result);
    }catch(err){
        res.status(404).send(err); 
    }
})

router.get('/mens',async (req, res)=>{
    try{
        const getMens = await MensRanking.find().sort({"ranking":1})
        console.log(getMens);
        res.status(200).send(getMens);
    }
    catch(err){
        console.log(err);
    }
})

// for inividual
router.get('/mens/:ranking',async (req, res)=>{
    try{
        const ranking = req.params.ranking;
        const getMen = await MensRanking.find({ranking:ranking});
        console.log(getMen);
        res.status(200).send(getMen);
    }
    catch(err){
        console.log(err);
    }
})

// patch
router.patch('/mens/:name', async (req, res)=>{
    try{
        const name = req.params.name;
        const updateData = await MensRanking.updateOne({name:name},req.body,{
            new:true,
        })
        console.log(updateData);
        res.status(200).send(updateData);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});

// delete
router.delete('/mens/:name', async (req, res)=>{
    try{
        const name = req.params.name;
        const deleteData = await MensRanking.deleteOne({name:name});
        console.log(deleteData);
        res.status(200).send(deleteData);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports = router;