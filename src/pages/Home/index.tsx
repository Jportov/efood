import { BannerCategoru } from '../../components/Banner'
import { ProductResta } from '../../components/ProductList'
import Restaurante from '../../models/Game'
import sushi from '../../assets/images/image 1.png'
import sushiA from '../../assets/images/imagem.png'

const Restaurantes: Restaurante[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki sushi',
    system: '4.9',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushiA,
    imageN: '',
    category: ''
  },
  {
    id: 2,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['Italiana'],
    image: sushi,
    imageN: ''
  },
  {
    id: 3,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['Italiana'],
    image: sushi,
    imageN: ''
  },
  {
    id: 4,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['Italiana'],
    image: sushi,
    imageN: ''
  },
  {
    id: 5,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['Italiana'],
    image: sushi,
    imageN: ''
  },
  {
    id: 6,
    category: '',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: '4.6',
    infos: ['Italiana'],
    image: sushi,
    imageN: ''
  }
]
const Home = () => (
  <>
    <BannerCategoru />
    <ProductResta
      title="Restaurantes"
      background="black"
      games={Restaurantes}
    />
  </>
)

export default Home
