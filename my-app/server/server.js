const express = require("express");

const app = express();
require("dotenv").config();
// db est défini dans la page connectionDatabase
const db = require("../src/database/connectionDatabase");
const router = require('../server/Routes/product.routes')

app.use(function (req, res, next) {
  req.db = db
  next()
})


app.use(router);

// Start the server
app.listen(8080, () => {
  console.log("Server is running");
});