const express = require("express");

const app = express();
require("dotenv").config();
require("mysql");
const connexionDatabase = require("../src/Database/connectionDatabase");


// Start the server
app.listen(8080, () => {
  console.log("Server is running");
});

connexionDatabase.connect()
// connexionDatabase.query('SELECT * FROM product_category', [], (erreur, resultat)=>{
//         if(erreur){
//           console.log(erreur);
//         } else {
//           // res.status(200).render("../public/index.js", {resultat});
//           console.log("Hello world", resultat);
//         }
//       })

// console.log(process.env.password);
