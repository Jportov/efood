import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinksItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'
import fundoImg from '../../assets/images/fundo.png'

// eslint-disable-next-line prettier/prettier
const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinksItem>
            <Link to="/categories">Restaurantes</Link>
          </LinksItem>
        </Links>
      </nav>

      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>

      <LinkCart href="#">0 - Produtos(s)</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
