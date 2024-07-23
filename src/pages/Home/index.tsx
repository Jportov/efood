import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Pratos from '../../models/Game'
import pizza1 from '../../assets/images/pizza.png'
import Header from '../../components/Header'

const promocoes: Pratos[] = [
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  },
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  },
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  },
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  },
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  },
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    system: '',
    infos: ['', ''],
    image: pizza1,
    imageN: ''
  }
]

const Home = () => (
  <>
    <Header />
    <Banner />
    <ProductList title="Promoções" background="gray" games={promocoes} />
  </>
)

export default Home
