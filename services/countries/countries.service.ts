import axios from "axios";
import { API_ENDPOINTS, API_URL } from "config";
import useSWR from "swr";
import { Country } from "typing";

const useGetAllCountries = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const URL = `${API_URL}${API_ENDPOINTS.COUNTRIES}`;

  const { data, error, isLoading, isValidating } = useSWR<Country[]>(
    `${URL}`,
    fetcher,
  );

  return {
    countries: data,
    errorCountries: error,
    loadingCountries: isLoading,
    validatinCountries: isValidating,
  };
};

export default useGetAllCountries;
