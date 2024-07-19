import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import '../styles/Farmers.css';


function Farmland() {
  const [farmlands, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/farmlands`);
        const data = await response.json();
        setFarmlands(data);
        return response.data;
      } catch (error) {
        console.error('Error fetching farmers data:', error);
      }
    };

    fetchFarmlands();
  }, []);

  return (
    <>
      <h1>Hello Farmers</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Size</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Farmer(Owner)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmlands.map((farmland, index) => (
          <tr key={farmland.id}>
          <td >{index+1}</td>
          <td>{farmland.size}</td>
          <td>{farmland.latitude}</td>
          <td>{farmland.longitude}</td>
          <td>{farmland.farmer_id}</td>
          <td>{farmland.status}</td>
          
          <td><button>hello b lin</button></td>
        </tr>
        ))}
          
        </tbody>
      </table>
    </>
  );
};

export default Farmland;