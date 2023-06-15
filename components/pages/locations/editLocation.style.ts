import styled from "@emotion/styled";

export const OptionStyled = styled.option``;

export const SelectStyled = styled.select`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.grayMedium};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  padding: 5px 20px;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grayDark};
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.grayMedium};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  padding: 5px 20px;
  margin: 0 auto;
`;

export const FormLocationEdit = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  gap: 1rem;
  flex-flow: column;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
`;
