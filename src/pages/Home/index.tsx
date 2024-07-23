import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/imagem.png'
import diablo from '../../assets/images/image 1.png'
import Banner from '../../components/Banner'
const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Xbox Series S/X - PS5',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Xbox Series S/X - PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Header />
    <Banner />
    <ProductList title="Pratos" background="gray" games={promocoes} />
  </>
)

export default Home
