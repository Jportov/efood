import styled from "styled-components";
import { cores } from "../../../styles";
import { breakpoints } from "../../Home/CardapioList/styles";
import { ButtonPerfil } from "../ButtonPerfil/styled";
import { ImageFechar } from "../CardPerfil/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 2200px; /* Fixed extra space */
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%; /* Added missing semicolon and percentage sign */
  }

  &.is-open {
    display: flex;
  }
`;
export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  width: 360px; /* Updated the width to a standard size */
  padding: 32px 8px 0 8px;
  z-index: 1;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    background-color: ${cores.salmao};
  }

  li {
    display: flex;
    position: relative;
  }
  input {
    color: #000;
  }

  ${ImageFechar} {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    ${ImageFechar} {
      display: block;
      right: 8px;
    }
  }
`;

export const ImgPrato = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
`;
export const ImgFechar = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;
export const Valor = styled.ul`
  display: flex;
  color: ${cores.trigo};
  font-weight: 700;
  margin-bottom: 16px;
  justify-content: center;

  li {
    font-weight: bold;
    font-size: 18px;
    margin-right: 8px;

    @media (max-width: ${breakpoints.tablet}) {
      align-self: center;
      font-size: 16px; /* Adjusted font size for better readability on smaller screens */
    }
  }

  ${ButtonPerfil} {
    font-weight: 700;
  }
`;
export const Cards = styled.li`
  background-color: ${cores.trigo};
  width: 344px;
  height: 100px;
  padding: 8px 8px 16px 8px;
  margin-bottom: 16px;
  color: ${cores.salmao};

  h3 {
    margin-bottom: 16px;
    height: 21px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    margin-bottom: 34px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; /* Adjusted width for responsiveness */
    margin: 0 auto;
    margin-bottom: 16px;

    h3 {
      font-size: 12px;
    }
  }
`;
