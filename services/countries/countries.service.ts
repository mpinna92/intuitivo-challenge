import { API_URL, API_ENDPOINTS } from "config";
import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get(`${API_URL}${API_ENDPOINTS?.COUNTRIES}`);
  return response.data;
};
