import BlocStock from "../components/BlocStock";
import PendingProducts from "../components/PendingProducts";
import axios from "axios";
import React, {useState, useEffect} from "react";

//TODO : Cette page ne devra être accessible que pour les comptes ayant des droits spécifiques.

function Admin() {
  const [stockData, setStockData] = useState([]);
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>{
    axios
      .get("http://localhost:8080/products_status/1")
      .then((response) => {
        setStockData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    axios
    .get("http://localhost:8080/products_status/0")
    .then((response) => {
      setPendingData(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
  }

  return (
    <div>
      <BlocStock stockData={stockData} updateData={fetchData}/>

      <p className="row"></p> 
      <PendingProducts pendingData={pendingData} updateData={fetchData}/>
    </div>
  );
}

export default Admin;
