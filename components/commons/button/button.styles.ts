import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  margin: 0;
  padding: 0;

  &.center {
    margin: 0 auto;
  }

  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  a {
    width: 100%;
    min-width: 200px;
    height: 45px;
    gap: 0.5rem;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.grayLight};
    border: 1px solid ${(props) => props.theme.colors.grayLight};
    display: flex;
    font-size: 1.1rem;
    justify-content: center;
    padding: 0 10px;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions["0.3s"]};
    margin: 0 auto;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
    }
  }

  &.view,
  &.edit,
  &.delete {
    a {
      min-width: 100px;
      height: 30px;
      border: none;
      background-color: ${(props) => props.theme.colors.grayDark};
      color: ${(props) => props.theme.colors.white};
      font-size: 0.8rem;
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.primaryDark};
      }
    }
  }

  &.edit {
    a {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }

  &.delete {
    a {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;
