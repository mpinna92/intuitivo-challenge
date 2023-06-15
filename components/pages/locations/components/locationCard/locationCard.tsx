import { Location } from "typing";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "components/commons/button";
import { getCountryName } from "utils";
import { useGetAllCountries } from "services/countries";
import { deleteLocation } from "services/locations";
import { mutate } from "swr";
import { API_ENDPOINTS, API_URL } from "config";

import {
  LocationCardContainer,
  LocationTitle,
  LocationCountry,
  LocationCardButtons,
} from "./locationCard.styles";

type LocationCardProps = Location;

const LocationCard = ({ id, countryId, name }: LocationCardProps) => {
  const { countries } = useGetAllCountries();
  const country = getCountryName(countries ?? [], countryId);

  return (
    <LocationCardContainer>
      <LocationTitle>{name}</LocationTitle>
      <LocationCountry>{country}</LocationCountry>

      <LocationCardButtons>
        <Button text='Ver destino' icon={<FaEye />} variant='view' />
        <Button text='Editar destino' icon={<FaEdit />} variant='edit' />
        <Button
          text='Borrar destino'
          onClick={async () => {
            await deleteLocation(id);
            mutate(`${API_URL}${API_ENDPOINTS.LOCATIONS}`);
          }}
          icon={<FaTrash />}
          variant='delete'
        />
      </LocationCardButtons>
    </LocationCardContainer>
  );
};

export default LocationCard;
