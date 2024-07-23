import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinzaClaro};
  padding: 32px 0;
  font-size: 14px;
  color: ${cores.laranja};
  max-width: 100%;
  max-height: 100%;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`
export const SectionTitle = styled.h4`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
`
export const Links = styled.ul`
  display: flex;
  color: ${cores.laranja};
  text-align: center;
  line-height: 42.19px;
  font-size: 36px;
  justify-content: space-between;
`

export const Link = styled.a`
  width: 30px;
  height: 24px;
  background-repeat: no-repeat;
  margin-top: 32px;
  margin-bottom: 80px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const ImagemLogoFooter = styled.div`
  width: 125px;
  height: 57.5px;

  background-repeat: no-repeat;
  position: relative;
  align-self: center;
`
