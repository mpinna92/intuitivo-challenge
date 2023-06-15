import { Location } from "typing";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "components/commons/button";
import { getCountryName } from "utils";
import { useGetAllCountries } from "services/countries";
import { deleteLocation } from "services/locations";
import { mutate } from "swr";
import { API_ENDPOINTS, ROUTES } from "config";

import {
  LocationCardContainer,
  LocationTitle,
  LocationCountry,
  LocationCardButtons,
  Lat,
  Lon,
  LocationCoordinates,
} from "./locationCard.styles";

interface LocationCardProps extends Location {
  buttons?: boolean;
}

const LocationCard = ({
  id,
  countryId,
  name,
  latitude,
  longitude,
  buttons = true,
}: LocationCardProps) => {
  const { countries } = useGetAllCountries();
  const country = getCountryName(countries ?? [], countryId);

  return (
    <LocationCardContainer>
      <LocationTitle>{name}</LocationTitle>
      <LocationCountry>{country}</LocationCountry>

      <LocationCoordinates>
        <Lat>Lat: {latitude}</Lat>
        <Lon>Lon: {longitude}</Lon>
      </LocationCoordinates>

      {buttons && (
        <LocationCardButtons>
          <Button
            text='Ver destino'
            link={`${ROUTES.LOCATIONS}/${id}`}
            icon={<FaEye />}
            variant='view'
          />
          <Button
            text='Editar destino'
            link={`${ROUTES.LOCATIONS}/editar/${id}`}
            icon={<FaEdit />}
            variant='edit'
          />
          <Button
            text='Borrar destino'
            onClick={async () => {
              await deleteLocation(id);
              mutate(`${API_ENDPOINTS.LOCATIONS}`);
            }}
            icon={<FaTrash />}
            variant='delete'
          />
        </LocationCardButtons>
      )}
    </LocationCardContainer>
  );
};

export default LocationCard;
