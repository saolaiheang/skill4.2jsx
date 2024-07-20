import React, { useState, useEffect } from 'react';
import {
  getTotalFarmers,
  getTotalFarmlands,
  getActiveCropCycles,
  getTotalFarmlandSize,
} from '../api/summary';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [totalFarmlands, setTotalFarmlands] = useState(0);
  const [activeCropCycles, setActiveCropCycles] = useState(0);
  const [totalFarmlandSize, setTotalFarmlandSize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmersData = await getTotalFarmers();
        setTotalFarmers(farmersData.totalFarmers);

        const farmlandsData = await getTotalFarmlands();
        setTotalFarmlands(farmlandsData.totalFarmlands);

        const cropCyclesData = await getActiveCropCycles();
        setActiveCropCycles(cropCyclesData.activeCropCycles);

        const farmlandSizeData = await getTotalFarmlandSize();
        setTotalFarmlandSize(farmlandSizeData.totalFarmlandSize);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <h2>Overview</h2>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <h3>Total Farmers</h3>
            <p>{totalFarmers}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmlands</h3>
            <p>{totalFarmlands}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Active Crop Cycles</h3>
            <p>{activeCropCycles}</p>
          </div>
          <div className="dashboard-stat">
            <h3>Total Farmland Size</h3>
            <p>{totalFarmlandSize}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;