import styled from "@emotion/styled";
import { DEVICES } from "config";

export const HelloApp = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
`;

export const HelloDesc = styled.h2`
  width: 100%;
  max-width: 350px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  line-height: 2.35rem;
  margin: 0 auto;
  text-align: center;
`;

export const SelectTestWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  z-index: 1;
  @media ${DEVICES.tablet} {
    flex-flow: column;
  }
`;

export const HomeCotainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  z-index: 1;
`;
