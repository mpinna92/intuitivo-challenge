import styled from "@emotion/styled";

export const LocationCardButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Lat = styled.p`
  font-weight: 500;
`;
export const Lon = styled.p`
  font-weight: 500;
`;

export const LocationCoordinates = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grayMedium};
  margin-bottom: 2rem;
  gap: 2rem;
  text-align: center;
`;

export const LocationCountry = styled.p`
  font-size: 1.5rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.colors.grayMedium};
  text-align: center;
`;

export const LocationTitle = styled.p`
  font-size: 1.8rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.grayMedium};
  text-align: center;
  color: ${(props) => props.theme.colors.grayDark};
  font-weight: 500;
  overflow: hidden;
`;

export const LocationCardContainer = styled.article`
  width: 100%;
  min-height: 100px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  gap: 0.5rem;
  flex-flow: column;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
  transition: ${(props) => props.theme.transitions["0.3s"]};
`;
