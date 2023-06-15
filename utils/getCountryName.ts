import { Country } from "typing";

const getCountryName = (countries: Country[], id: number) => {
  console.log(countries, id);
  const country = countries.find((country: Country) => country?.id === id);

  return country?.name ?? "País no encontrado";
};

export default getCountryName;
