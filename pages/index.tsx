import Head from "next/head";
import { Container, MainLayout } from "layouts/mainLayout";
import { FaLink } from "react-icons/fa";

import { Button } from "components/commons/button";
import { ROUTES } from "config";

import {
  HomeCotainer,
  HelloApp,
  SelectTestWrapper,
  HelloDesc,
} from "components/pages/home/home.styles";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>Maxi Pinna - Front-end Test</title>
      </Head>

      <Container>
        <HomeCotainer>
          <HelloApp>Hola 👋🏼</HelloApp>
          <HelloDesc>
            Bienvenidos al Code Challenge de front-end para Intuitivo
          </HelloDesc>

          <SelectTestWrapper>
            <Button
              text={"Ejercicio uno"}
              link={ROUTES.LOCATIONS}
              icon={<FaLink />}
            />
            <Button
              text={"Ejercicio dos"}
              link={ROUTES.PRODUCTS}
              icon={<FaLink />}
            />
          </SelectTestWrapper>
        </HomeCotainer>
      </Container>
    </MainLayout>
  );
};

export default Home;
