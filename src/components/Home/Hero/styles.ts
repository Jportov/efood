import styled from 'styled-components'
import Vector from '../../../assets/images/vector.png'
import { cores } from '../../../styles'
import { breakpoints } from '../CardapioList/styles'

export const HeroContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;
  background-image: url(${Vector});
`
export const HeroText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${cores.salmao};
  margin-bottom: 40px;
  padding: 20px 16px; /* Adiciona padding para melhorar a responsividade */

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 10%; /* Ajuste a margem superior para melhorar a responsividade */
    font-size: 14px; /* Ajusta o tamanho da fonte para telas menores */
  }
`

export const ImgHero = styled.img`
  margin-top: 40px;
  border-radius: 8px; /* Adiciona bordas arredondadas */
  width: 128px; /* Ajusta a largura da imagem para 100% */
  height: 58px; /* Ajusta a altura automaticamente */
  @media (max-width: ${breakpoints.tablet}) {
    width: 30%;
  }
`
