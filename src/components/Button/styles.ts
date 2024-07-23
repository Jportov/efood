import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;

  width: 95%;
  margin: 10px;
  align-self: center;
`
export const ButtonLinkA = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 82px;
  heigth: 16px;
  padding: 8px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.41px;

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
