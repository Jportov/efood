import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  position: relative;
  margin: 20px;
  aling-items: center;
  box-sizing: border-box;
  img {
    width: 98%;
    height: 40%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    max-width: 100%;
    flex-direction: column; /* Altera para layout de coluna em telas menores */
    align-items: flex-start; /* Garante que os itens se estiquem para ocupar toda a largura */
    padding: 10px; /* Adiciona um padding interno para espaçamento */
    text-align: center; /* Centraliza o texto */
    box-sizing: border-box;

    .imgPrato {
      width: 100%; /* Ajusta a largura da imagem para ocupar 100% do CardRest */
      height: auto; /* Mantém a proporção da altura */
      margin-bottom: 20px; /* Adiciona espaço abaixo da imagem */
    }
    .button {
      max-width: 100%; /* Ajusta a largura do botão para ocupar 100% do CardRest */
      max-height: 100%; /* Ajusta a altura do botão para ocupar 100% do CardRest */
    }
  }
`

export const Titulo = styled.h3`
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    display: block;
    margin: 5px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
    margin: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
