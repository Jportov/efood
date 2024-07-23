import Button from '../Button'

import { Card, Titulo, Descricao } from './styles'

type Props = {
  title: string
  category?: string
  system?: string
  description: string
  infos: string[]
  image: string
}
const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type={'button'} title={''} />
  </Card>
)

export default Product
