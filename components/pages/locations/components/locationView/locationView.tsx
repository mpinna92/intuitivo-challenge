import { Location } from "typing";
import { LocationsGrid, NoLocations } from "./locationView.styles";
import { LocationCard } from "../locationCard";


interface LocationViewPros {
  locations: Location[];
  isLoading: boolean;
}

const LocationView = ({ locations, isLoading }: LocationViewPros) => {
  if (locations?.length)
    return (
      <LocationsGrid>
        {locations?.map((location: Location) => (
          <LocationCard
            key={location?.id}
            id={location?.id}
            name={location?.name}
            countryId={location?.countryId}
          />
        ))}
      </LocationsGrid>
    );

  if (isLoading ) return <NoLocations>Cargando!!</NoLocations>;

  return <NoLocations>😔 No hay destinos para mostrar</NoLocations>;
};

export default LocationView;
