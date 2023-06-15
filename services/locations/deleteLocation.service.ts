import axios from "axios";
import { API_ENDPOINTS } from "config";

const deleteLocation = async (id: number) => {
  const response = await axios.delete(`${API_ENDPOINTS?.LOCATIONS}/${id}`);
  return response;
};

export default deleteLocation;
