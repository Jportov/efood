import styled from 'styled-components'
import { cores } from '../../styles'
import heroImg from '../../assets/images/hero.png'

export const Imagem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    z-index: 1;
    position: relative;
  }
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`

export const Titulo = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  padding-top: 156px;
  padding-left: 40px;
`
export const TituloH = styled.h2`
  color: ${cores.rosa};
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: center;
  padding-top: 90px;

  @media screen and (max-width: 768px) {
    font-size: 4px;
    line-height: 28px;
    padding-top: 0px;
  }
`

export const Precos = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 33px;
  padding-left: 40px;
`
export const ImageLogo = styled.div`
  background-repeat: no-repeat;
  align-self: center;
  align-items: center;
  width: 125px;
  height: 57px;
`

export const ImagemHero = styled.div`
  display: flex;
  padding: 32px;
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
