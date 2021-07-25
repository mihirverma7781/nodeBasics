const express = require ("express");
require("../src/db/conn");
const mensRouter  = require("../src/routers/men")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());    
app.use(mensRouter);
app.listen(port, ()=>{
    console.log(`connected to port ${port}`);
})

