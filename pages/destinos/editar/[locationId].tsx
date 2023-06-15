import Head from "next/head";
import { Country, Location } from "typing";
import { API_ENDPOINTS, ROUTES } from "config";
import { FaLink, FaSave } from "react-icons/fa";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { useState, useEffect } from "react";

import { editLocation, useGetAllLocations } from "services/locations";
import { useGetAllCountries } from "services/countries";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import {
  LocationsGrid,
  NoLocations,
} from "components/pages/locations/components/locationView/locationView.styles";

import {
  ButtonsWrappers,
  LocationsContainer,
  LocationsTitle,
} from "components/pages/locations/locations.style";
import {
  FormLocationEdit,
  InputStyled,
  InputWrapper,
  Label,
  OptionStyled,
  SelectStyled,
} from "components/pages/locations/editLocation.style";

const LocationEdit = () => {
  const router = useRouter();
  const { query } = router;

  const { locations } = useGetAllLocations();
  const location = locations?.find(
    (location: Location) => location?.id === Number(query?.locationId),
  );

  const { countries } = useGetAllCountries();

  const [editData, setEditData] = useState<Partial<Location>>({
    name: "",
    latitude: "",
    longitude: "",
    countryId: 0,
  });

  useEffect(() => {
    location &&
      setEditData({
        name: location?.name,
        latitude: location?.latitude,
        longitude: location?.longitude,
        countryId: location?.countryId,
      });
  }, [location]);

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
              <FormLocationEdit>
                <InputWrapper>
                  <Label>Nombre</Label>
                  <InputStyled
                    defaultValue={location?.name}
                    onChange={(e) => setEditData({ name: e.target.value })}
                    name='name'
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Pais</Label>
                  <SelectStyled
                    defaultValue={location?.countryId}
                    onChange={(e) =>
                      setEditData({
                        countryId: Number(e.target.value),
                      })
                    }
                  >
                    {countries?.map((countrie: Country) => (
                      <OptionStyled key={countrie?.id} value={countrie?.id}>
                        {countrie?.name}
                      </OptionStyled>
                    ))}
                  </SelectStyled>
                </InputWrapper>

                <InputWrapper>
                  <Label>Latitud</Label>
                  <InputStyled
                    defaultValue={location?.latitude}
                    onChange={(e) => setEditData({ latitude: e.target.value })}
                    name='lat'
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Longitud</Label>
                  <InputStyled
                    defaultValue={location?.longitude}
                    onChange={(e) => setEditData({ longitude: e.target.value })}
                    name='lon'
                  />
                </InputWrapper>
              </FormLocationEdit>

              <Button
                text={"Guardar cambios"}
                link={ROUTES.LOCATIONS}
                onClick={async () => {
                  await editLocation(location?.id, editData);
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
