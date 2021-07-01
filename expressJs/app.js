const express = require ('express');
const app = express();

app.get("/",(req, res) => {
    res.send("hello from the express server. <h1>Hello World</h1>")
})

app.get("/about",(req, res) => {
    res.send("<h1>Hello My name is Mihir Verma</h1>")
})

app.listen(3000, ()=>{
    console.log(`listening to the port 3000`)
})



// get - read the data from the server
// post - create a new data 
// put - updating the data
// delete - delete the data