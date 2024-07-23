import { ButtonContainer, ButtonLink } from './styles'
type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}
const Button = ({ type, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        Adicionar ao Carrinho
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string} title={title}></ButtonLink>
}

export default Button
