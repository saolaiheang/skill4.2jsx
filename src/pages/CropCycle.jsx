import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import '../styles/Farmers.css';


function CropCycle() {
  const [cropcycles, setCropcycles] = useState([]);

  useEffect(() => {
    const fetchCropcycles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/crop-cycles`);
        const data = await response.json();
        setCropcycles(data);
        return response.data;
      } catch (error) {
        console.error('Error fetching farmers data:', error);
      }
    };

    fetchCropcycles();
  }, []);

  return (
    <>
      <h1>Hello Crop_</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Farmland_ID</th>
            <th>Crop_ID</th>
            <th>Open_Date</th>
            <th>Close_Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cropcycles.map((cropcycle, index) => (
          <tr key={cropcycle.id}>
          <td >{index+1}</td>
          <td>{cropcycle.farm_land_id}</td>
          <td>{cropcycle.crop_id}</td>
          <td>{cropcycle.open_date}</td>
          <td>{cropcycle.close_date}</td>
          <td>{cropcycle.status}</td>
          <td><button>hello b lin</button></td>
        </tr>
        ))}
          
        </tbody>
      </table>
    </>
  );
};

export default CropCycle;
