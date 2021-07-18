const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to my About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to my contact Page</h1>");
});

// app.get("/temp", (req, res) => {
//   res.status(200).send([{
//     name: "Mihir",
//     age: "20",
//     sex: "male",
//   }]);
// });
app.get("/temp", (req, res) => {
  res.status(200).json([{
    name: "Mihir",
    age: "20",
    sex: "male",
  }]);
});

app.listen(port, () => {
  console.log("listening to port 3000");
});
