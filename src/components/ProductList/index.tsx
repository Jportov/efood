import Pratos from '../../models/Game'
import Product from '../Product'
import ProductHome from '../../Restaurantes'
import { Container, List, ListC } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Pratos[]
}
const ProductList = ({ background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description !== undefined ? game.description : ''}
            image={game.image}
            title={game.title}
            category={game.category}
            system={game.system}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
export type PropsH = {
  title: string
  background: 'gray' | 'black'
  games: Pratos[]
}
export const ProductResta = ({ background, games }: PropsH) => (
  <Container background={background}>
    <div className="container">
      <ListC>
        {games.map((game) => (
          <ProductHome
            key={game.id}
            description={game.description !== undefined ? game.description : ''}
            image={game.image}
            imageN={game.title}
            title={game.title}
            category={game.category}
            system={game.system}
            infos={game.infos}
          />
        ))}
      </ListC>
    </div>
  </Container>
)
