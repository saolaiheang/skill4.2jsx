import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import "../styles/Farmers.css";

function CropCycle() {
  const [cropcycles, setCropcycles] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchCropcycles = async (status = "") => {
    try {
      let url = `${API_BASE_URL}/crop-cycles`;
      if (status) {
        url += `?status=${encodeURIComponent(status)}`;
      }
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

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatusFilter(selectedStatus);

    if (selectedStatus === "") {
      fetchCropcycles();
    } else {
      fetchCropcycles(selectedStatus);
    }
  };

  return (
    <>
      <div className="dropdown">
        <label>
          Select status:
          
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
      </div>
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
              <td>{index + 1}</td>
              <td>{cropcycle.farm_land_id}</td>
              <td>{cropcycle.crop_id}</td>
              <td>{cropcycle.open_date}</td>
              <td>{cropcycle.close_date}</td>
              <td>{cropcycle.status}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CropCycle;