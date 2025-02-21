import styled from "styled-components";

export const breakpoints = {
  tablet: "768px",
  celular: "480px",
};

export const SectionList = styled.section`
  width: 100%; /* Fixing width to 100% for responsive design */
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;
  padding: 0 16px; /* Adiciona padding para melhorar a responsividade */

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 15%;
    margin-bottom: 15%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Fixed grid template columns */
  justify-content: center;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 0;
    row-gap: 20px;
  }
`;
