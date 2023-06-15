import axios from "axios";
import { API_ENDPOINTS } from "config";
import { Location } from "typing";

const editLocation = async (id: number, data: Partial<Location>) => {
  const response = await axios.patch(`${API_ENDPOINTS?.LOCATIONS}/${id}`, data);
  return response;
};

export default editLocation;
