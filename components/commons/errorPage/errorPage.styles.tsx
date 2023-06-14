import styled from "@emotion/styled";
import { DEVICES } from "config";

export const ButtonWrapper = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;
  margin-top: 40px;
  @media ${DEVICES.mobileL} {
    margin-top: 20px;
  }
`;

export const MessageLine = styled.div`
  width: 106%;
  height: 6px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 20px;
`;

export const SubMessage = styled.div`
  width: 100%;
  max-width: 370px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: 1.1rem;
  line-height: 1.6rem;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  z-index: 3;
  margin: 20px auto 0;
`;

export const Message = styled.div`
  width: 100%;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: 2.5rem;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  text-align: center;
  word-wrap: nowrap;
  z-index: 3;
  margin: 0 auto;

  @media ${DEVICES.mobileL} {
    font-size: 2rem;
  }
`;

export const MessageButton = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  margin-top: -45px;
`;

export const Number = styled.div`
  width: 90%;
  color: ${(props) => props.theme.colors.grayDark};
  font-size: 10.625rem;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  text-align: center;
  margin: 0 auto;
  @media ${DEVICES.mobileL} {
    font-size: 9rem;
  }
`;

export const ErrorNumberAndMessage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: relative;
  text-align: center;
`;

export const ErrorContainer = styled.section`
  width: 95%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
