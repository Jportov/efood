import styled from 'styled-components'
import { cores } from '../styles'

export const CardRest = styled.div`
max-width: 100%;
width: 472px;
height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background-color: ${cores.branca};
  color: ${cores.rosa};
  border: 1px solid ${cores.rosa};

  margin-top: 48px;
  box-sizing: border-box;
  text-align: left;

  .imgPrato { width: 100%; height: 220px; object-fit: cover;
    }

  button {
    margin: 8px 8px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: ${cores.branca};
  }
`

export const Titulo = styled.h3`
  margin-left: 7px;
  line-height: 22px;
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  align-self: center;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
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
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`
