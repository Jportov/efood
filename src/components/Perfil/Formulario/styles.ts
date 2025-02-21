import styled from "styled-components";
import { cores } from "../../../styles";
import { ButtonPerfil } from "../ButtonPerfil/styled";

export const ContentFormulario = styled.div`
  color: ${cores.trigo};
  font-weight: 700;

  input {
    background-color: ${cores.trigo};
    border: none;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
    font-weight: 700;

    &.error {
      border: 2px solid #000;
    }
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${ButtonPerfil} {
    display: block;
    margin-bottom: 8px;
    border-radius: 8px; /* Adiciona bordas arredondadas */
  }
`;
export const Ajuste = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 34px;

  >div: margin-right: 10px;
`;
export const Subtitulo = styled.h3`
  color: ${cores.trigo};
  margin-bottom: 16px;
`;
export const Buttondiv = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
`;
export const Visivel = styled.div`
  display: none;

  &.is-open {
    display: block;
  }
`;
export const ContainerRec = styled.div`
  color: ${cores.trigo};
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`;
export const ButtonRecibo = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: 100%;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;
