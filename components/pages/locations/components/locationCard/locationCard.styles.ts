import styled from "@emotion/styled";
import { DEVICES } from "config";

export const LocationCardContainer = styled.article`
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
