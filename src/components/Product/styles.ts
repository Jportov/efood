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
  img {
    width: 98%;
    height: 40%;
  }
`

export const Titulo = styled.h3`
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 10px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
