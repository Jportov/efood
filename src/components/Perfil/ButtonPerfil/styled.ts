import styled from 'styled-components'
import { cores } from '../../../styles'

export const ButtonPerfil = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: 100%;
  max-width: 100%;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${cores.salmao}; /* Adiciona cor de fundo ao passar o mouse */
    color: ${cores.branca}; /* Altera a cor do texto ao passar o mouse */
  }

  /* Adiciona transição suave ao hover */
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Adiciona uma sombra ao botão */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
