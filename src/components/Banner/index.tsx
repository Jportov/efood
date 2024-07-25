import { Imagem, Titulo, Precos, Overlay, TituloH, ImagemHero } from './styles'
import fundo from '../../assets/images/fundo.png'
import heroImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <Overlay />
    <div className="container">
      <Precos>Italiana</Precos>
      <Titulo>La Dolcae Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner

export const BannerCategoru = () => (
  <ImagemHero style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <TituloH>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </TituloH>
    </div>
  </ImagemHero>
)
