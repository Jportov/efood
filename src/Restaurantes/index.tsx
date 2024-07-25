import Tag from '../components/Tag'
import { ButtonLinkA } from '../components/Button/styles'
import { CardRest, Titulo, Descricao, Infos, ImgNota, TituloN } from './styles'
import estrela from '../assets/images/estrela.png'
type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  imageN: string
}

const ProductHome = ({ title, description, infos, image, system }: Props) => (
  <div className="container">
    <CardRest>
      <img className="imgPrato" src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <TituloN>
        {system}
        <ImgNota src={estrela} />
      </TituloN>
      <Descricao>{description}</Descricao>
      <ButtonLinkA type={'button'} title={'Saba mais'}>
        <a href="/categories">Saiba mais</a>
      </ButtonLinkA>
    </CardRest>
  </div>
)

export default ProductHome
