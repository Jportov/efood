import styled from "styled-components";
import Vector from "../../../assets/images/vector.png";
import { cores } from "../../../styles";
import { breakpoints } from "../../Home/CardapioList/styles";

export const HeaderContainer = styled.header`
  background-image: url(${Vector});
`;
export const PerfilList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.salmao};
  font-weight: 700;
  font-size: 18px;

  li:first-child {
    margin-right: 96px;
    display: block;
  }

  li:last-child {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-around;

    li:first-child {
      display: none;
    }
  }
`;
export const ContainerPerfil = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export const ImaLogo = styled.img`
  margin: 64px 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 100px;
  }
`;

export const SpanNotification = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px; /* Ajusta a posição para que o contador fique no canto superior direito do ícone */
  right: -5px; /* Ajusta a posição para que o contador não fique fora do ícone */
  transform: translate(50%, -50%); /* Correção fina do posicionamento */
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${cores.salmao};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: -5 -5px;
  animation: 0.3s ease-in-out 0s 1 normal forwards running hUaSCH;
`;

export const CartButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 16px;
  cursor: pointer;
  width: auto;

  img {
    width: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      margin-left: 0;
    }
  }
`;
