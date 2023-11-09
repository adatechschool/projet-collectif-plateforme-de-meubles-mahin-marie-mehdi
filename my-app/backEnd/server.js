const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


require("dotenv").config();
// db est défini dans la page connectionDatabase
const db = require("./database/connectionDatabase");
const router = require("./routes/product.routes");
const catRouter = require("./routes/productCategory.routes");
const userRouter = require("./routes/user.routes");

app.use(function (req, res, next) {
  req.db = db;
  next();
});
app.use(cors());
app.use(router);
app.use(catRouter);
app.use(userRouter);

// Start the server
app.listen(8080, () => {
  console.log("Server is running");
});
