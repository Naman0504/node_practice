const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const db = require("./db"); // MongoDB connection file

app.use(bodyParser.json());

// Root route
app.get("/", function (req, res) {
  res.send("Welcome to the Application and the Data you need");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);


const menuRoutes= require('./routes/menuRoutes')
app.use('/menus',menuRoutes)


// Start the server
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
