const express = require("express");

const app = express();
require("dotenv").config();
// db est défini dans la page connectionDatabase
<<<<<<< HEAD
const db = require("../server/database/connectionDatabase");
const router = require("../server/Routes/product.routes");
=======
const db = require("../src/database/connectionDatabase");
const router = require('../server/Routes/product.routes')
>>>>>>> aa87b621cbb0b80b642085619520ae965980e196

app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use(router);

// Start the server
app.listen(8080, () => {
  console.log("Server is running");
<<<<<<< HEAD
});
=======
});
>>>>>>> aa87b621cbb0b80b642085619520ae965980e196
