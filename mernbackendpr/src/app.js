const express = require("express");
const bcrypt = require("bcrypt");
const Singer = require("./models/singer");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const hbs = require("hbs");
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
// app.use(express.static(staticPath))
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    if (password === confirmpassword) {
      const registerSinger = new Singer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

    //   hash here middleware
      const result = await registerSinger.save();
      res.status(201).render("index");
      console.log("Register Successfully");
    } else {
      console.log("password mismatch");
      res.send("password mismatch");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log("registration error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const validate = await Singer.findOne({ email: email });
    console.log(validate);
    const isMatch =await bcrypt.compare(password, validate.password);
    if (isMatch) {
      res.render("index");
      console.log("login success");
    } else {
      res.send("password mismatch");
      console.log("login failed");
    }
  } catch (err) {
    console.log("login error");
    res.send("email not found");
  }
});

app.listen(port, () => {
  console.log("listening to port " + port);
});
