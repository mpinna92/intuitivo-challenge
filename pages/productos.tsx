import { Product } from "typing";

import Head from "next/head";
import { ROUTES } from "config";
import { Container, MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import { FaLink } from "react-icons/fa";

import ProductCard from "components/pages/products/components/productCard/productCard";

import {
  ProductsContainer,
  ProductsTitle,
  ProductsGrid,
} from "components/pages/products/products.styles";

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      media: { cover: "image-3.png" },
      title: "Not ice cream",
      description: "200ml",
      price: {
        standard: "200,00",
        currency: "ARS",
      },
    },
    {
      id: 2,
      media: { cover: "image-2.png" },
      title: "Mini postre Balcarce",
      description: "200ml",
      price: {
        standard: "200,00",
        currency: "ARS",
      },
    },
    {
      id: 3,
      media: { cover: "image-1.png" },
      title: "Powerade mountain Blast 20fl. oz",
      description: "Sports Drinks",
      price: {
        standard: "200,00",
        promotional: "170,00",
        currency: "ARS",
      },
    },
  ];
  return (
    <MainLayout>
      <Head>
        <title>Ejercicio Dos - Productos 🛒</title>
      </Head>

      <Container>
        <ProductsContainer>
          <ProductsTitle>Productos 🛒</ProductsTitle>

          <ProductsGrid>
            {products?.map((product: Product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </ProductsGrid>

          <Button
            text={"Voler al inicio"}
            link={ROUTES.ROOT}
            icon={<FaLink />}
            center
          />
        </ProductsContainer>
      </Container>
    </MainLayout>
  );
};

export default Products;
