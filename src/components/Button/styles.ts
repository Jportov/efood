import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: 2px solid ${cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  width: 95%;

  margin: 10px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: bold;
    padding: 4px 8px;
  }
`
export const ButtonLinkA = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 82px;
  height: 24px;
  padding: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  align-items: center;
  border: none;
`
export const ButtonLink = styled(Link)`
  display: flex;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 82px;
  heigth: 24px;

  padding: 8px 16px;
  border-radius: 1px;
`
