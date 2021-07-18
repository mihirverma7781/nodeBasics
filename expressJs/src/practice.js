const express= require("express");
const path = require('path');
const app = express();
const port = 5000;

const staticPath = path.join(__dirname,"../public")

// builtin middleware
app.use(express.static(staticPath)); 

app.get('/',(req, res) =>{
    res.send("hello from the express server")
})


app.listen(port,()=>{
    console.log("listening on port 5000")
})