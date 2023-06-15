import axios from "axios";
import { API_ENDPOINTS, API_URL } from "config";

const deleteLocation = async (id: number) => {
  const response = await axios.delete(
    `${API_URL}${API_ENDPOINTS?.LOCATIONS}/${id}`,
  );
  return response;
};

export default deleteLocation;
