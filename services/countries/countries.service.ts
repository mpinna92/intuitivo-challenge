import axios from "axios";
import { useMemo } from "react";
import { API_ENDPOINTS } from "config";
import useSWR from "swr";
import { Country } from "typing";

const useGetAllCountries = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const URL = `${API_ENDPOINTS.COUNTRIES}`;

  const { data, error, isLoading, isValidating } = useSWR<Country[]>(
    `${URL}`,
    fetcher,
  );

  const countries: Country[] = useMemo(() => data ?? [], [data]);

  return {
    countries,
    errorCountries: error,
    loadingCountries: isLoading,
    validatinCountries: isValidating,
  };
};

export default useGetAllCountries;
