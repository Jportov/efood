import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 10px;

  background-color: ${cores.branca2};
  ${Card} {
    align-items: center;
    width: 100%;
    align-self: center;
    margin: inherit;
    background-color: ${cores.rosa};
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column; /* Altera para layout de coluna em telas menores */
    align-items: stretch; /* Garante que os itens se estiquem para ocupar toda a largura */
    padding: 0px; /* Adiciona um padding interno para espaçamento */
    text-align: center; /* Centraliza o texto */
    box-sizing: border-box;
    ${Card} {
      align-items: center;
      max-width: 230px;
      max-height: 400px;
      margin: inherit;
      background-color: ${cores.rosa};
      button {
        max-width: 80%;
        width: 100%;
        margin: 0 auto; /* Centraliza horizontalmente */
      }
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
  }
`

export const ListC = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 24px;
    margin-top: 40px;
    margin: 20px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: bold;
  }
`
