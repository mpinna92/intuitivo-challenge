import Head from "next/head";
import { GetServerSideProps } from "next";
import { Location } from "typing";
import { ROUTES } from "config";
import { getLocations } from "services/locations";
import { FaLink, FaPlus } from "react-icons/fa";

import { Container, MainLayout } from "layouts/mainLayout";
import { LocationCard } from "components/pages/locations/components/locationCard";
import { Button } from "components/commons/button";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsGrid,
  LocationsTitle,
  NoLocations,
} from "components/pages/locations/locations.style";
import { AxiosResponse } from "axios";

interface LocationsProps {
  locations: Location[];
}

const Locations = ({ locations }: LocationsProps) => {
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

          {!locations?.length && (
            <NoLocations>😔 No hay destinos para mostrar</NoLocations>
          )}

          {locations?.map((location: Location) => (
            <LocationsGrid key={location?.id}>
              <LocationCard key={location?.id} location={location} />
            </LocationsGrid>
          ))}
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const data: AxiosResponse<Location[]> = await getLocations();
    return { props: { locations: data } };
  } catch (error) {
    if (res.statusCode) {
      return {
        redirect: {
          destination: "/500",
          permanent: true,
        },
      };
    }
  }
  return { props: {} };
};

export default Locations;
