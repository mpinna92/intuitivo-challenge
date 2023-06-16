import Head from "next/head";
import { Country, Location } from "typing";
import { API_ENDPOINTS, ROUTES } from "config";
import { FaLink, FaSave } from "react-icons/fa";
import { mutate } from "swr";
import { useState, useEffect } from "react";

import { addLocation } from "services/locations";
import { useGetAllCountries } from "services/countries";

import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import { LocationsGrid } from "components/pages/locations/components/locationView/locationView.styles";

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
  const { countries } = useGetAllCountries();

  const [editData, setEditData] = useState<Partial<Location>>({
    name: "",
    latitude: "",
    longitude: "",
    countryId: 3,
  });
  const [fullfilledForm, setFullfilledForm] = useState<boolean>(false);

  useEffect(() => {
    setEditData(editData);

    if (
      editData?.name === "" ||
      editData?.latitude === "" ||
      editData?.longitude === "" ||
      editData?.countryId === -1
    ) {
      setFullfilledForm(false);
    } else {
      setFullfilledForm(true);
    }
  }, [editData]);

  return (
    <MainLayout>
      <Head>
        <title>Ejercicio Uno - Destinos 🌍</title>
      </Head>

      <Container>
        <LocationsContainer>
          <LocationsTitle>Crear destino 🌍⛰️</LocationsTitle>

          <ButtonsWrappers>
            <Button
              text={"volver a destinos"}
              link={ROUTES.LOCATIONS}
              icon={<FaLink />}
              center
            />
          </ButtonsWrappers>

          <LocationsGrid>
            <FormLocationEdit>
              <InputWrapper>
                <Label>Nombre</Label>

                <InputStyled
                  defaultValue={editData?.name}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  name='name'
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Pais</Label>
                <SelectStyled
                  defaultValue={editData?.countryId}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      countryId: Number(e.target.value),
                    }))
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
                  defaultValue={editData?.latitude}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      latitude: e.target.value,
                    }))
                  }
                  name='lat'
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Longitud</Label>
                <InputStyled
                  defaultValue={editData?.longitude}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      longitude: e.target.value,
                    }))
                  }
                  name='lon'
                />
              </InputWrapper>
            </FormLocationEdit>

            <Button
              text={"Guardar cambios"}
              link={ROUTES.LOCATIONS}
              onClick={async () => {
                await addLocation(editData);
                mutate(`${API_ENDPOINTS.LOCATIONS}`);
              }}
              icon={<FaSave />}
              center
              disabled={!fullfilledForm}
            />
          </LocationsGrid>
        </LocationsContainer>
      </Container>
    </MainLayout>
  );
};

export default LocationEdit;
