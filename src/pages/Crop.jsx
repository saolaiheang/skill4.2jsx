


import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import "../styles/Farmers.css";

function TableRow({ crop, index }) {
  return (
    <tr key={crop.id}>
      <td>{index + 1}</td>
      <td>{crop.name}</td>
      <td>{crop.crop_type.name}</td>
    </tr>
  );
}

function Farmers() {
  const [crops, setCrops] = useState([]);
  const [cropTypes, setCropTypes] = useState([]);
  const [selectedCropType, setSelectedCropType] = useState("");

  useEffect(() => {
   
    const fetchCropTypes = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/crop-types`);
        if (!response.ok) {
          throw new Error("Failed to fetch crop types");
        }
        const data = await response.json();
        setCropTypes(data);
      } catch (error) {
        console.error("Error fetching crop types:", error);
      }
    };

    fetchCropTypes();
  }, []); 

  const handleCropTypeChange = (event) => {
    const selectedCropType = event.target.value;
    setSelectedCropType(selectedCropType);
    fetchCrops(selectedCropType);
  };

  const fetchCrops = async (cropTypeId = "") => {
    try {
      let url = `${API_BASE_URL}/crops`;
      if (cropTypeId) {
        url += `?crop_type_id=${encodeURIComponent(cropTypeId)}`;
      }
      console.log("Fetching crops from URL:", url); 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch crops");
      }
      const data = await response.json();
      console.log("Fetched crops data:", data); 
      setCrops(data);
    } catch (error) {
      console.error("Error fetching crops data:", error);
    }
  };

  useEffect(() => {
   
    fetchCrops();
  }, []);

  return (
    <>
      <div className="dropdown">
        <label>
          <select value={selectedCropType} onChange={handleCropTypeChange}>
            <option value="">Select a crop type</option>
            {cropTypes.map((cropType) => (
              <option key={cropType.id} value={cropType.id}>
                {cropType.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <h1>All Crops</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Crop Type</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <TableRow key={crop.id} crop={crop} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmers;
