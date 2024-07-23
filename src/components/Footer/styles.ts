import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  padding: 32px 0;
  font-size: 14px;
  disl
`
export const SectionTitle = styled.h4`
  color: ${cores.rosa};
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  padding-top: 80px;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  padding-top: 32px;
`

export const Link = styled.a`
  cursor: pointer;
  color: ${cores.rosa};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`
