const express = require("express");

const app = express();
require("dotenv").config();

const mysql = require("mysql");
const myConnection = require("express-myconnection");
const connexionDatabase = require("../src/Database/connectionDatabase");


// Start the server
app.listen(8080, () => {
  console.log("Server is running");
});

const connection = connexionDatabase();

connection.connect()
connection.query('SELECT * FROM product_category', [], (erreur, resultat)=>{
        if(erreur){
          console.log(erreur);
        } else {
          // res.status(200).render("../public/index.js", {resultat});
          console.log("Hello world", resultat);
        }
      })

console.log(process.env.password);
// Définition du middleware pour connexion à la base de données
// app.use(myConnection(mysql, optionBd));

// app.get("/testdb", (req, res) => {
//   req.getConnection((erreur, connection) => {
//     if (erreur){
//       console.log(erreur);
//     }else {
//       connection.query('SELECT * FROM product_category', [], (erreur, resultat)=>{
//         if(erreur){
//           console.log(erreur);
//         } else {
//           // res.status(200).render("../public/index.js", {resultat});
//           console.log("Hello world", resultat);
//         }
//       })
//     }
//   })
// })