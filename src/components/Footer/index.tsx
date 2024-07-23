import { Container, SectionTitle, FooterSection, Link, Links } from './styles'
import logoImg from '../../assets/images//logo.png'
import xLogo from '../../assets/images/x.png'
import fLogo from '../../assets/images/facebook-round-svgrepo-com 1.png'
import xInsta from '../../assets/images/insta.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logoImg} alt="EPLAY" />
        <Links>
          <li>
            <Link>
              <img src={fLogo} alt="EPLAY" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={xLogo} alt="EPLAY" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={xInsta} alt="EPLAY" />
            </Link>
          </li>
        </Links>
        <SectionTitle>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.{' '}
        </SectionTitle>
      </FooterSection>
    </div>
  </Container>
)
export default Footer
