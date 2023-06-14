import { Location } from "typing";

import { LocationCardContainer } from "./locationCard.styles";

interface LocationCardProps {
  location: Location;
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <LocationCardContainer>
      <div>{location.id}</div>
      <div>{location.name}</div>
      <div>{location.country}</div>
    </LocationCardContainer>
  );
};

export default LocationCard;
