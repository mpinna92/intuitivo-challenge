import styled from "@emotion/styled";

export const NoLocations = styled.p`
  max-width: 90%;
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  text-align: center;
  margin: 40px auto;
`;

export const LocationsGrid = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  gap: 1rem;
`;
