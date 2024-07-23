import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import pratoDois from '../../assets/images/image 1.png'
import pratoUm from '../../assets/images/imagem.png'
import { BannerCategory } from '../../components/Banner'

const rpg: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Prato 1, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Prato 1',
    system: 'Xbox Series S/X - PS5',
    infos: ['10%', 'R$ 250,00'],
    image: pratoDois
  },
  {
    id: 2,
    category: 'Esporte',
    description: '',
    title: 'Prato 2',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: pratoUm
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Prato 1, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Prato 1',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: pratoDois
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ Prato 2 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Prato 2',
    system: 'Xbox Series S/X - PS5',
    infos: ['5%', 'R$ 290,00'],
    image: pratoUm
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ Prato 2 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Prato 2',
    system: 'Xbox Series S/X - PS5',
    infos: ['5%', 'R$ 290,00'],
    image: pratoUm
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ Prato 2 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Prato 2',
    system: 'Xbox Series S/X - PS5',
    infos: ['5%', 'R$ 290,00'],
    image: pratoUm
  }
]

const Categories = () => (
  <>
    <BannerCategory />
    <ProductList title="Pratos" background="gray" games={rpg} />
  </>
)

export default Categories
