import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinksItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.png'
import fundoImg from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinksItem>
            <Link to="/">Restaurantes</Link>
          </LinksItem>
        </Links>
      </nav>
      <Link to="/">
        <img src={logo} alt="EFood" />
      </Link>
      <LinkCart href="#">0 - Produtos(s)</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
