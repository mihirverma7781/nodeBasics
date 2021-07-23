const express = require('express');
const Employee = require('./models/employee.js');
const empRouter = require("./routers/employeeRoutes")
require('./db/conn'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(empRouter);




app.listen(port, ()=>{
    console.log('listening on port '+port+' number');
})

