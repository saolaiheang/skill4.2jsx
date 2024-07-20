import React, { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import "../styles/Farmers.css";

function TableRow({ farmer, index }) {
  return (
    <tr key={farmer.id}>
      <td>{index + 1}</td>
      <td>{farmer.id_card}</td>
      <td>{farmer.first_name}</td>
      <td>{farmer.last_name}</td>
      <td>{farmer.gender}</td>
      <td>{farmer.phone}</td>
      <td>{farmer.source}</td>
      <td>{farmer.district.name}</td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    // Fetch provinces from API
    const fetchProvinces = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/provinces`);
        if (!response.ok) {
          throw new Error("Failed to fetch provinces");
        }
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    // Fetch all districts from API
    const fetchDistricts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/districts`);
        if (!response.ok) {
          throw new Error("Failed to fetch districts");
        }
        const data = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchProvinces();
    fetchDistricts();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedDistrict(""); // Reset selected district when province changes

    // Filter districts based on selected province
    const filtered = districts.filter(
      (district) =>
        district.province_id ===
        provinces.find((province) => province.name === selectedProvince)?.id
    );
    setFilteredDistricts(filtered);
    console.log("Filtered districts:", filtered);
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    console.log(selectedDistrict);
    setSelectedDistrict(selectedDistrict);
    // Fetch farmers based on selected district
    fetchFarmers(selectedDistrict);
  };

  const fetchFarmers = async (districtId = "") => {
    try {
      let url = `${API_BASE_URL}/farmers`;
      // Append districtId as query parameter if provided
      if (districtId) {
        url += `?district_id=${encodeURIComponent(districtId)}`;
      }
      console.log("Fetching farmers from URL:", url); // Log the URL to verify it's correct
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch farmers");
      }
      const data = await response.json();
      console.log("Fetched farmers data:", data); // Log the fetched data to verify
      setFarmers(data);
    } catch (error) {
      console.error("Error fetching farmers data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial farmers data when component mounts
    fetchFarmers();
  }, []);
  return (
    <>
      <div className="dropdown">
        <label>
          
          <select value={selectedProvince} onChange={handleProvinceChange}>
            <option value="">Select a province</option>
            {provinces.map((province) => (
              <option key={province.name} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </label>
      
        <label>
          
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            disabled={!selectedProvince}
          >
            <option value="">Select a district</option>
            {filteredDistricts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <h1>Hello Farmers</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Id_Card</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Source</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <TableRow key={farmer.id} farmer={farmer} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmers;