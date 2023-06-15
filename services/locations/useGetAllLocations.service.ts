import axios from "axios";
import { useMemo } from "react";
import { API_ENDPOINTS, API_URL } from "config";
import useSWR from "swr";
import { Location, LocationInitalValue } from "typing";

const useGetAllLocations = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const URL = `${API_URL}${API_ENDPOINTS.LOCATIONS}`;

  const { data, error, isLoading, ...rest } = useSWR<Location[]>(
    `${URL}`,
    fetcher,
  );

  const locations: Location[] = useMemo(
    () => data ?? [LocationInitalValue],
    [data],
  );

  return {
    locations,
    locationsError: error,
    loadingLocations: isLoading,
    ...rest,
  };
};

export default useGetAllLocations;
