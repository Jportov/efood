import LogoImg from '../../assets/images/logo.png'
import faceImg from '../../assets/images/facebook-round-svgrepo-com 1.png'
import xImg from '../../assets/images/x.png'
import instaImg from '../../assets/images/Group.png'
import { ImagemLogoFooter } from '../Footer/styles'
import { Container, SectionTitle, FooterSection, Link, Links } from './styles'
const currentYear = new Date().getFullYear()
const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <ImagemLogoFooter style={{ backgroundImage: `url(${LogoImg})` }} />
        <Links>
          <Link href="/#" style={{ backgroundImage: `url(${faceImg})` }} />
          <Link href="/#" style={{ backgroundImage: `url(${xImg})` }} />
          <Link href="/#" style={{ backgroundImage: `url(${instaImg})` }} />
        </Links>
      </FooterSection>
      <SectionTitle>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </SectionTitle>
      <SectionTitle>
        {currentYear} &copy; Efood Todos os direitos reservados
      </SectionTitle>
    </div>
  </Container>
)
export default Footer
