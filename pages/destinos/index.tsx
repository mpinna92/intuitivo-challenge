import Head from "next/head";
import { ROUTES } from "config";
import { FaLink, FaPlus } from "react-icons/fa";
import { useGetAllLocations } from "services/locations";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import LocationView from "components/pages/locations/components/locationView/locationView";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsTitle,
} from "components/pages/locations/locations.style";

const Locations = () => {
  const { locations, loadingLocations, mutate } = useGetAllLocations();
  mutate(locations);
  return (
    <MainLayout>
      <Head>
        <title>Ejercicio Uno - Destinos 🌍</title>
      </Head>

      <Container>
        <LocationsContainer>
          <LocationsTitle>Destinos 🌍</LocationsTitle>
          <ButtonsWrappers>
            <Button
              text={"Voler al inicio"}
              link={ROUTES.ROOT}
              icon={<FaLink />}
              center
            />

            <Button
              text={"Agregar Destino"}
              link={ROUTES.ROOT}
              icon={<FaPlus />}
              center
            />
          </ButtonsWrappers>

          <LocationView locations={locations} isLoading={loadingLocations} />
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default Locations;
