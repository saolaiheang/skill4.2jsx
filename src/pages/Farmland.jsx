import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import "../styles/Farmers.css";

function Farmland() {
  const [farmlands, setFarmlands] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchFarmlands = async (status = "") => {
    try {
      let url = `${API_BASE_URL}/farmlands`;
      if (status) {
        url += `?status=${encodeURIComponent(status)}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setFarmlands(data);
    } catch (error) {
      console.error("Error fetching farmlands data:", error);
    }
  };

  useEffect(() => {
    // Fetch all farmlands initially
    fetchFarmlands();
  }, []);

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatusFilter(selectedStatus);

    if (selectedStatus === "") {
      fetchFarmlands();
    } else {
      fetchFarmlands(selectedStatus);
    }
  };

  return (
    <>
      <div className="dropdown">
        <label>
          Select a status:
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
      </div>
      <h1>Hello Farmlands</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Size</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Farmer (Owner)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmlands.map((farmland, index) => (
            <tr key={farmland.id}>
              <td>{index + 1}</td>
              <td>{farmland.size}</td>
              <td>{farmland.latitude}</td>
              <td>{farmland.longitude}</td>
              <td>{farmland.farmer_id}</td>
              <td>{farmland.status}</td>
              <td>
                <button>hello b lin</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmland;