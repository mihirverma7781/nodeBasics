const express = require ('express');
const path = require('path');
require('../src/db/conn')
const port = process.env.PORT || 3000;
const hbs = require ('hbs');
const Register = require("./models/registers");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")
app.use(express.static(staticPath))

app.set('view engine','hbs');
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.get('/',async (req, res)=>{
    res.render("index")
})
app.get('/register',async (req, res)=>{
    res.render("register")
})

// new user
app.post('/register',async (req, res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password===cpassword){
            const registerUser = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email:req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                gender: req.body.gender,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword,
            });
            const result = await registerUser.save();
            res.status(200).render("index");
        }
        else{
            res.send("passwords doesnt match")
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})
app.get('/login',async (req, res)=>{
    res.render("login")
})


// login validation
app.post('/login',async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const validate = await Register.findOne({email:email});
        if(validate.password===password){
            res.status(200).render("index");
        }
        else{
            res.status(404).send("email / password is not valid");  
        }
        console.log(validate.password);

    }
    catch(err){
        res.status(400).send("invalid email");
    }
})


app.listen(port,()=>{
    console.log("listening on port"+ port);
})