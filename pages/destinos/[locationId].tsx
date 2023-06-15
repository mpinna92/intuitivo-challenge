import Head from "next/head";
import { ROUTES } from "config";
import { FaLink } from "react-icons/fa";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import { LocationCard } from "components/pages/locations/components/locationCard";
import { LocationsGrid } from "components/pages/locations/components/locationView/locationView.styles";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsTitle,
} from "components/pages/locations/locations.style";

const Location = () => {
  return (
    <MainLayout>
      <Head>
        <title>Ejercicio Uno - Destinos 🌍</title>
      </Head>

      <Container>
        <LocationsContainer>
          <LocationsTitle>Bienvenido a {} 🌍</LocationsTitle>

          <ButtonsWrappers>
            <Button
              text={"Todos los destinos"}
              link={ROUTES.LOCATIONS}
              icon={<FaLink />}
              center
            />
          </ButtonsWrappers>

          <LocationsGrid>
            <LocationCard id={1} name={"algo"} countryId={2} buttons={false} />
          </LocationsGrid>
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default Location;
