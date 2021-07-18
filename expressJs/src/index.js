const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs');
const requests = require('requests');
// console.log(__dirname);
// console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")

// builtin middleware
// to set the view engine
app.set('view engine','hbs');
app.set('views',templatePath);

// registering partials
hbs.registerPartials(partialPath);

// app.use(express.static(staticPath));

// template engine root path
app.get('/',(req, res)=>{
    res.render('index',{
        title:"Sigma Male",
        head:"Sigma Male Website"
    });
})

app.get('/about',(req, res)=>{
res.render('about',{})
})

app.get('/temp',(req, res)=>{
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name},uid&APPID=2454c11341d91cd72ce1bc7e34632990`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      console.log(` Temprature of ${arrData[0].name} is ${arrData[0].main.temp}`)
      res.write(arrData[0].name)
    })
      
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
    });
})

// setting 404 error page
app.get('/about/*',(req, res)=>{
  res.render('404',{
    error:"error page",
    errorhead:"error about page"
  })
})
app.get('*',(req, res)=>{
  res.render('404',{
    error:"error page",
    errorhead:"universal error page"
  })
})


app.get("/", (req, res) => {
  res.send("hello from the express server. <h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello My name is Mihir Verma</h1>");
});

app.listen(3000, () => {
  console.log(`listening to the port 3000`);
});

// get - read the data from the server
// post - create a new data
// put - updating the data
// delete - delete the data
