import Head from "next/head";
import { Location } from "typing";
import { API_ENDPOINTS, ROUTES } from "config";
import { FaLink, FaSave } from "react-icons/fa";
import { useRouter } from "next/router";

import { deleteLocation, useGetAllLocations } from "services/locations";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import { LocationCard } from "components/pages/locations/components/locationCard";
import {
  LocationsGrid,
  NoLocations,
} from "components/pages/locations/components/locationView/locationView.styles";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsTitle,
} from "components/pages/locations/locations.style";
import { mutate } from "swr";

const LocationEdit = () => {
  const router = useRouter();
  const { query } = router;

  const { locations } = useGetAllLocations();
  const location = locations?.find(
    (location: Location) => location?.id === Number(query?.locationId),
  );

  return (
    <MainLayout>
      <Head>
        <title>Ejercicio Uno - Destinos 🌍</title>
      </Head>

      <Container>
        <LocationsContainer>
          {location && (
            <LocationsTitle>Editando {location?.name} 🌍✏️</LocationsTitle>
          )}

          <ButtonsWrappers>
            <Button
              text={"volver a destinos"}
              link={ROUTES.LOCATIONS}
              icon={<FaLink />}
              center
            />
          </ButtonsWrappers>

          {!location && (
            <NoLocations>
              😔 No puedes editar un destino que no existe
            </NoLocations>
          )}

          {location && (
            <LocationsGrid>
              <LocationCard
                id={location?.id}
                name={location?.name}
                countryId={location?.countryId}
                latitude={location?.latitude}
                longitude={location?.longitude}
                buttons={false}
              />
              <Button
                text={"Guardar cambios"}
                link={ROUTES.LOCATIONS}
                onClick={async () => {
                  await deleteLocation(location?.id);
                  mutate(`${API_ENDPOINTS.LOCATIONS}`);
                }}
                icon={<FaSave />}
                center
              />
            </LocationsGrid>
          )}
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default LocationEdit;
