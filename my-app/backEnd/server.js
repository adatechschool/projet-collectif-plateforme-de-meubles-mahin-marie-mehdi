const express = require("express");

const app = express();
require("dotenv").config();
// db est défini dans la page connectionDatabase
const db = require("./database/connectionDatabase");
const router = require("./routes/product.routes");
const catRouter = require("./routes/productCategory.routes");

app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use(router);
app.use(catRouter);

// Start the server
app.listen(8080, () => {
  console.log("Server is running");
});
