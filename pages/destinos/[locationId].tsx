import Head from "next/head";
import { ROUTES } from "config";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/router";

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
import { useGetAllLocations } from "services/locations";
import { Location } from "typing";

const Location = () => {
  const router = useRouter();
  const { query } = router;

  const { locations, loadingLocations } = useGetAllLocations();
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
          <LocationsTitle>Bienvenido a {location?.name} 🌍</LocationsTitle>

          <ButtonsWrappers>
            <Button
              text={"volver a destinos"}
              link={ROUTES.LOCATIONS}
              icon={<FaLink />}
              center
            />
          </ButtonsWrappers>

          {loadingLocations && (
            <NoLocations>⌛ Cargando contenido...</NoLocations>
          )}

          {!location && <NoLocations>😔 Este destino no existe</NoLocations>}

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
            </LocationsGrid>
          )}
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default Location;
