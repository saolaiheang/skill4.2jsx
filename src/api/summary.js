import axios from "axios";
import API_BASE_URL from "../config";
const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/summary`,
});
export const getTotalFarmers = async () => {
  try {
    const response = await summaryAPI.get('/total-farmers');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmers:', error);
    throw error;
  }
};

export const getTotalFarmlands = async () => {
  try {
    const response = await summaryAPI.get('/total-farmlands');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmlands:', error);
    throw error;
  }
};

export const getActiveCropCycles = async () => {
  try {
    const response = await summaryAPI.get('/active-crop-cycles');
    return response.data;
  } catch (error) {
    console.error('Error fetching active crop cycles:', error);
    throw error;
  }
};

export const getTotalFarmlandSize = async () => {
  try {
    const response = await summaryAPI.get('/total-farmland-size');
    return response.data;
  } catch (error) {
    console.error('Error fetching total farmland size:', error);
    throw error;
  }
};