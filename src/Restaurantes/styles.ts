import styled from 'styled-components'

import { cores } from '../styles'

export const CardRest = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  max-width: 100%;
  position: relative;
  background-color: ${cores.branca};
  color: ${cores.rosa};
  border: 0.5px solid ${cores.rosa};

  margin-top: 48px;
  box-sizing: border-box;

  text-align: left;
  .imgPrato {
    width: 480px; /* Ajusta a largura da imagem para ocupar 100% do espaço do CardRest */
    height: 217px; /* Mantém a proporção da altura conforme a largura */
    /* Garante que a imagem não ultrapasse a largura máxima do CardRest */
    /* Garante que a imagem não ultrapasse a altura máxima do CardRest */
    display: block; /* Remove espaços extras abaixo da imagem */
  }

  button {
    margin: 0;
    margin-top: 8px;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 10px;
  margin-bottom: 8px;
  align-self: center;
`
export const Descricao = styled.p`
  font-size: 12px;
  line-height: 16px;

  margin-left: 10px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const ImgNota = styled.img`
  margin: 8px;
  align-self: center;
`
export const TituloN = styled.h3`
  margin-left: 240px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;
`
