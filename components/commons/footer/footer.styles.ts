import styled from "@emotion/styled";

export const LinkWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 2rem 0;
  text-align: center;
  justify-content: center;
  gap: 0.2rem;
  margin: 0 auto;

  a {
    color: ${(props) => props.theme.colors.grayLight};
    transition: ${(props) => props.theme.transitions["0.3s"]};
    font-size: 0.9rem;
    font-weight: 300;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary};
    }

    svg {
      position: relative;
      top: 1px;
    }
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
`;
