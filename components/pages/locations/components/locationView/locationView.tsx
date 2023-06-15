import { Location } from "typing";
import { LocationsGrid, NoLocations } from "./locationView.styles";
import { LocationCard } from "../locationCard";
import { useGetAllLocations } from "services/locations";

const LocationView = () => {
  const { locations, loadingLocations, locationsError } = useGetAllLocations();

  if (!!locations?.length)
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

  if (locationsError)
    return <NoLocations>🔌 Servidor no encontrado.</NoLocations>;

  if (loadingLocations)
    return <NoLocations>⌛ Cargando destinos...</NoLocations>;

  return <NoLocations>😔 No hay destinos para mostrar</NoLocations>;
};

export default LocationView;
