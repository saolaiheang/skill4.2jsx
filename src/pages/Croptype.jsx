import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import "../styles/Farmers.css";

function CropCycle() {
  const [cropcycles, setCropcycles] = useState([]);
  

  const fetchCropcycles = async (status = "") => {
    try {
      let url = `${API_BASE_URL}/crop-types`;
      const response = await fetch(url);
      const data = await response.json();
      setCropcycles(data);
    } catch (error) {
      console.error("Error fetching farmlands data:", error);
    }
  };

  useEffect(() => {
    fetchCropcycles();
  }, []);

  

  return (
    <>
    
      <h1>Hello Everyone</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
           
            
          </tr>
        </thead>
        <tbody>
          {cropcycles.map((croptype, index) => (
            <tr key={croptype.id}>
              <td>{index + 1}</td>
              <td>{croptype.name}</td>
             
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CropCycle;