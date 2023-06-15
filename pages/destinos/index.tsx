import Head from "next/head";
import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { Country, Location } from "typing";
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
import { getCountries } from "services/countries";

interface LocationsProps {
  locations: Location[];
  countries: Country[];
}

const Locations = ({ locations, countries }: LocationsProps) => {
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
              <LocationCard
                key={location?.id}
                location={location}
                countries={countries}
              />
            </LocationsGrid>
          ))}
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  try {
    const locations: AxiosResponse<Location[]> = await getLocations();
    const countries: AxiosResponse<Country[]> = await getCountries();
    return { props: { locations, countries } };
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: true,
      },
    };
  }
};

export default Locations;
