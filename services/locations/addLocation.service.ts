import axios from "axios";
import { API_ENDPOINTS } from "config";
import { Location } from "typing";

const addLocation = async (data: Partial<Location>) => {
  const response = await axios.post(`${API_ENDPOINTS?.LOCATIONS}`, data);
  return response;
};

export default addLocation;
