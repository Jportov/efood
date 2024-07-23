import styled from 'styled-components'
import heroImg from '../../assets/images/hero.png'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 370px;
  background-size: cover;
  display: flex;
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`
export const ImagemLogo = styled.div`
  width: 125px;
  height: 57.5px;
  background-repeat: no-repeat;
  position: relative;
  align-self: center;
`

export const ImagemHero = styled.div`
  position: relative;
  width: 100%;
  height: 370px;
  background-size: cover;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Cor e opacidade da sobreposição */
  }

  .overlay {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    flex-direction: column;
    position: relative;
    z-index: 1;

    justify-content: flex-start;
    width: 100%;
    height: 100%;
    color: ${cores.branca}; /* Cor do texto dos TituloHero */
  }
`

export const Titulo = styled.h2`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  color: ${cores.laranja};
  margin-top: 80px;
`
export const TituloHero = styled.h2`
  font-family: Roboto;

  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  color: ${cores.branca};
  margin-top: 80px;
  position: relative;
`
export const SubtituloHero = styled.p`
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  color: ${cores.branca};
  margin-top: 30px;
  position: relative;
`
