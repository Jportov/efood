import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px;

  background-color: ${(props) =>
    props.background === 'black' ? cores.laranja : cores.cinza};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.laranja : cores.laranja};
  }
`
export const List = styled.ul`
  display: grid;
  margin: inherit;

  grid-template-columns: 1fr 1fr;

  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
