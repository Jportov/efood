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
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  margin: 20px;
`
export const ListC = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  margin: 20px;
`
export const Title = styled.h2`
  font-siz: 18px;
  font-weight: bold;
`
