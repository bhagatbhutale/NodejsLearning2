// const express = require("express");
// const app = express();
// // Middle ware :-
// const reqFilter = require("./middleware");

// const route = express.Router();


// app.use(reqFilter)
// Specific Middleware 
route.use(reqFilter)
app.use("/", route);
route.get("/users", (req, res) => {
  res.send("welcome  to users Page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Cotnact Page")
})

app.get("/", (req, res) => {
  res.send("Welcome to Home Page")
})

app.get("/about", (req, res) => {
  res.send("welcome  to users Page");
});

app.use("/" , route)

// app.listen(4500, () => {
//   console.log("Server is Started...")
// })
