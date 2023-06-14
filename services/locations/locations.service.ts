import { API_URL, API_ENDPOINTS } from "config";
import axios from "axios";

export const getLocations = async () => {
  const response = await axios.get(`${API_URL}${API_ENDPOINTS?.LOCATIONS}`);
  return response.data;
};
