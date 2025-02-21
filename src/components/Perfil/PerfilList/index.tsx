import { Prato } from '../../../types/Restaurante'
import CardPerfil from '../CardPerfil'
import { OpcoesContainer, PerfilList } from './styles'

type Props = {
  pratos: Prato[]
}

const OpcoesPerfil = ({ pratos }: Props) => {
  return (
    <>
      <OpcoesContainer className="container">
        <PerfilList>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <CardPerfil
                //obejto unico sendo passado, diferente do anterior
                prato={{
                  foto: prato.foto,
                  descricao: prato.descricao,
                  nome: prato.nome,
                  porcao: prato.porcao,
                  preco: prato.preco,
                  id: prato.id
                }}
              />
            </li>
          ))}
        </PerfilList>
      </OpcoesContainer>
    </>
  )
}

export default OpcoesPerfil


