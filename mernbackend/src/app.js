require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const cookieParser = require("cookie-parser");
require("../src/db/conn");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const Register = require("./models/registers");
const auth = require("../src/middleware/auth")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// bcrypt

// const encryptPass = async (password)=>
// {
//     const passwordHash = await bcrypt.hash(password,10);
//     console.log(passwordHash);
// }
// encryptPass("Mihir@7781");

app.get("/", async (req, res) => {
  res.render("index");
});
app.get("/secret", auth, async (req, res) => {
  res.render("secret");
  // console.log(`this is awesome cookie ${req.cookies.jwt} `)
});
app.get("/logout", auth, async (req, res) => {
try{
  req.user.tokens = req.user.tokens.filter((curElm) => {
    return curElm.token !== req.token
  }
  )
  console.log(`this req.user => ${req.user}`)
  res.clearCookie("jwt");
  await req.user.save();
  res.render("login");
console.log("logout successful")
}
catch(err) {
  res.status(500).send("err")
}
});
app.get("/register", async (req, res) => {
  res.render("register");
});

// new user
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const registerUser = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      // middleware for hashing passwords
      console.log(registerUser);
      const token = await registerUser.generatAuthToken();
      // cookie storage provider
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 30000),
        httpOnly: true,
      });
      console.log();

      console.log("token = " + token);
      //
      const result = await registerUser.save();
      res.status(200).render("index");
    } else {
      res.send("passwords doesnt match");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get("/login", async (req, res) => {
  res.render("login");
});

// login validation
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const validate = await Register.findOne({ email: email });
    console.log(validate);
    const isMatch = await bcrypt.compare(password, validate.password);
    const token = await validate.generatAuthToken();
    console.log("login token: " + token);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 300000),
      httpOnly: true,
    });

    console.log(isMatch);
    if (isMatch) {
      res.status(200).render("index");
    } else {
      res.status(404).send("email / password is not valid");
    }
    console.log(validate.password);
  } catch (err) {
    res.status(400).send("invalid email");
  }
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
