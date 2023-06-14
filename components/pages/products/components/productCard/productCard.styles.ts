import styled from "@emotion/styled";
import { DEVICES } from "config";

export const PriceStandard = styled.div`
  white-space: nowrap;
  font-weight: 600;
`;

export const PriceCurrency = styled.div`
  white-space: nowrap;
  font-weight: 600;
  font-size: 1rem;
`;

export const PriceStandardWrapper = styled.div`
  width: 100%;
  display: flex;
  white-space: nowrap;
  font-size: 1.5rem;
  justify-content: center;
  align-items: baseline;
  color: ${(props) => props.theme.colors.purple};
  font-weight: 600;
  gap: 0.2rem;
`;

export const PricePromotional = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  color: ${(props) => props.theme.colors.red};
  font-weight: 600;
  text-align: center;
  margin: 0 auto;
  position: relative;
  &:after {
    width: 102%;
    height: 1px;
    content: " ";
    background-color: ${(props) => props.theme.colors.red};
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 0.4rem;
  margin-top: auto;
`;

export const ProductDesc = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.grayMedium};
  text-align: center;
  font-weight: 500;
`;

export const ProductTitle = styled.p`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.grayDark};
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100px;
  flex: 0 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
  margin: 0 auto 0.8rem;
  img {
    object-fit: contain;
  }
`;

export const ProductCardContainer = styled.article`
  width: 100%;
  height: 300px;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-flow: column;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
  transition: ${(props) => props.theme.transitions["0.3s"]};

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  }
  @media ${DEVICES.mobileL} {
    max-width: 220px;
    height: 300px;
  }
`;
