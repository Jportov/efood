import styled from 'styled-components'
import { cores } from '../../styles'
import heroImg from '../../assets/images/hero.png'

export const Imagem = styled.div`
  padding: 32px;
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-image: url(${heroImg});
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding:
    line-height: 12px;

  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3); /* Cor e opacidade da sobreposição */
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: 100%;
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 25px;

  }
`

export const ConteudoOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-;
  text-align: start;
  color: ${cores.branca};
`

export const Titulo = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: center;
  padding-top: 90px;
  @media screen and (max-width: 768px) {
    font-weight: 900;
    font-size: 20px;
    padding-top: 150px;
    text-align: center;
  }
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
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;
`
export const ImageLogo = styled.div`
  background-repeat: no-repeat;
  align-self: center;
  align-items: center;
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
