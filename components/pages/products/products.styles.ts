import styled from "@emotion/styled";

export const ProductsGrid = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-columns: min-content;
  margin: 0 auto;
  gap: 1rem;
`;

export const ProductsTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 80px 0;
  margin: 0 auto;
`;
