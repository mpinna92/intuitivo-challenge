import styled from "@emotion/styled";
import { DEVICES } from "config";

export const ButtonsWrappers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media ${DEVICES.mobileL} {
    flex-flow: column;
  }
`;

export const NoLocations = styled.p`
  max-width: 400px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  text-align: center;
  margin: 20px auto;
`;

export const LocationsGrid = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  gap: 1rem;
`;

export const LocationsTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const LocationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 80px 0;
  margin: 0 auto;
`;
