import { Product } from "typing";
import Image from "next/image";

import {
  ProductCardContainer,
  ProductImage,
  ProductTitle,
  ProductDesc,
  PriceWrapper,
  PricePromotional,
  PriceStandard,
  PriceCurrency,
  PriceStandardWrapper,
} from "./productCard.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Image
          src={`/images/products/${product?.media?.cover}`}
          alt={product?.title}
          fill
        />
      </ProductImage>

      <ProductTitle>{product?.title}</ProductTitle>
      <ProductDesc>{product?.description}</ProductDesc>

      <PriceWrapper>
        {product?.price?.promotional && (
          <PricePromotional>
            {product?.price?.promotional} {product?.price?.currency}
          </PricePromotional>
        )}

        <PriceStandardWrapper>
          <PriceStandard>{product?.price?.standard}</PriceStandard>{" "}
          <PriceCurrency>{product?.price?.currency}</PriceCurrency>
        </PriceStandardWrapper>
      </PriceWrapper>
    </ProductCardContainer>
  );
};

export default ProductCard;
