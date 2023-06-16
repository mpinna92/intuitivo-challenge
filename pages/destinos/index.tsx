import Head from "next/head";
import { ROUTES } from "config";
import { FaLink, FaPlus } from "react-icons/fa";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import LocationView from "components/pages/locations/components/locationView/locationView";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsTitle,
} from "components/pages/locations/locations.style";

const Locations = () => {
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
              link={`${ROUTES.LOCATIONS}/crear-destino`}
              icon={<FaPlus />}
              center
            />
          </ButtonsWrappers>

          <LocationView />
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default Locations;
