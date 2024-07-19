import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import '../styles/Farmers.css';

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
      <td><button>Edit</button></td>
    </tr>
  );
}

function selectProvince(e) {
  let province_id = e.target.value;
  endpoint = '/farmers?province_id=' + province_id;
}

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('all');
  const options = ['all', 'one', 'two'];


  const fetchFarmers = async (option) => {
    try {
      let endpoint = '';
      if (option === 'all') {
        endpoint = '/farmers';
      } else if (option === 'one') {
        endpoint = '/farmers?province_id=1';
      } else if (option === 'two') {
        endpoint = '/farmers?province_id=2';
      }
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      const data = await response.json();
      setFarmers(data);
    } catch (error) {
      console.error('Error fetching farmers data:', error);
    }
  };

  useEffect(() => {
    fetchFarmers(selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <label>
          Select an option:
          <select value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
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
            <th>Province</th>
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
