import { Location } from "typing";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "components/commons/button";

import {
  LocationCardContainer,
  LocationTitle,
  LocationCountry,
  LocationCardButtons,
} from "./locationCard.styles";

interface LocationCardProps {
  location: Location;
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <LocationCardContainer>
      <LocationTitle>{location?.name}</LocationTitle>
      <LocationCountry>{location?.country}</LocationCountry>

      <LocationCardButtons>
        <Button text='Ver destino' icon={<FaEye />} variant="view" />
        <Button text='Editar destino' icon={<FaEdit />} variant="edit" />
        <Button text='Borrar destino' icon={<FaTrash />} variant="delete" />
      </LocationCardButtons>
    </LocationCardContainer>
  );
};

export default LocationCard;
