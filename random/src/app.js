const express = require("express");

const port = process.env.PORT || 5005;
const app = express();
// app.get('/',(req, res)=>{
//     res.send('<p style="color:red">Manvi jain</p><p>this is first express app</p>');
// })

app.get('/',(req, res)=>{
    // res.send(`<h1 style="color:blue">Query String Firstname is : ${req.query.firstname}</p>
    // <p style="color:blue">Query String Lastname is : ${req.query.lastname}</p>
    // <p style="color:red">Query String age is : ${req.query.age}</p>
    // `)
    res.send("<h1>Mihir Verma</h1> <p>my first express app</p>")
})
app
app.listen(port,()=>{
    console.log("listening on port "+port);
})