import { Imagem, ImagemHero, SubtituloHero, Titulo, TituloHero } from './styles'
import fundoImg from '../../assets/images/fundo.png'
import LogoImg from '../../assets/images/logo.png'
import heroImg from '../../assets/images/hero.png'
import { Link } from 'react-router-dom'

const Banner = () => (
  <ImagemHero style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <div className="overlay">
        <SubtituloHero>Italiana</SubtituloHero>
        <TituloHero>La Dolce Vita Trattoria</TituloHero>
      </div>
    </div>
  </ImagemHero>
)
export default Banner
export const BannerCategory = () => (
  <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
    <div className="container">
      <Link to="/">
        <img src={LogoImg} alt="Efood" />
      </Link>
      <div>
        <Titulo>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Titulo>
      </div>
    </div>
  </Imagem>
)
