import styled from "styled-components";
import { cores } from "../../../styles";
import { breakpoints } from "../CardapioList/styles";

import { Restaurante } from "../../../types/Restaurante";

export const ImgCardapio = styled.div<Pick<Restaurante, "capa">>`
  width: 100%;
  max-width: 400px; /* Diminuir largura máxima */
  height: 200px; /* Diminuir altura */
  background-image: url(${(props) => props.capa});
  flex-direction: row-reverse;
  display: flex;
  border-radius: 8px 8px 0 0; /* Adiciona bordas arredondadas na parte superior */
  overflow: hidden; /* Garante que o conteúdo não ultrapasse as bordas arredondadas */

  @media (max-width: ${breakpoints.tablet}) {
    max-width: none;
  }
`;

export const Etiqueta = styled.span`
  position: relative;
  top: 16px;
  right: 8px;
`;

export const CardCadapio = styled.div`
  margin: 0 auto; /* Fixed margin value */
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8%; /* Diminuir margem inferior */
  }
`;

export const CadapiorListaTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px; /* Diminuir tamanho da fonte para melhorar a responsividade */

  h3 {
    margin-top: 8px;
    margin-left: 8px;
    line-height: 20px; /* Diminuir altura da linha */
  }

  li:nth-child(2) {
    padding: 8px 8px 0 8px;
  }
`;

export const Borda = styled.div`
  width: 100%;
  justify-content: space-between;
  max-width: 400px;
  border-style: solid;
  border-width: 1px; /* Ajuste a largura conforme necessário */
  border-color: transparent ${cores.salmao} ${cores.salmao} ${cores.salmao};
  background-color: ${cores.branca};
  color: ${cores.salmao};
  border-radius: 0 0 8px 8px; /* Adiciona bordas arredondadas na parte inferior */
  overflow: hidden; /* Garante que o conteúdo não ultrapasse as bordas arredondadas */

  a {
    width: 70px;
    color: ${cores.branca};
    background-color: ${cores.salmao};
    border-radius: 4px; /* Adiciona bordas arredondadas */
    padding: 3px 5px; /* Diminuir padding */
    font-weight: 700;
    font-size: 12px; /* Diminuir tamanho da fonte */
    text-decoration: none;
    display: inline-block;
    margin: 6px 6px; /* Diminuir margem */
    transition: background-color 0.3s; /* Adiciona efeito de transição */
  }
`;

export const TextCardapio = styled.p`
  margin: 16px 8px;
  line-height: 22px;
  font-size: 12px; /* Diminuir tamanho da fonte */
`;
export const Nota = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  p {
    padding-right: 8px;
  }
`;
export const ImgEstrela = styled.img`
  padding-left: 8px;
`;
