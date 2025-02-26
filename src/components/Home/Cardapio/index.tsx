import { Link } from "react-router-dom";

import {
  Borda,
  CadapiorListaTag,
  CardCadapio,
  Etiqueta,
  ImgCardapio,
  ImgEstrela,
  Nota,
  TextCardapio,
} from "./styles";

import Estrela from "../../../assets/images/estrela.png";
import { Restaurante } from "../../../types/Restaurante";
import Tag from "../Tag";

type Props = Omit<Restaurante, "cardapio">;

const Cardapio = ({
  tipo,
  titulo,
  descricao,
  avaliacao,
  capa,
  id,
  destacado,
}: Props) => {
  const limitarDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.substring(0, 190) + "...";
    }

    return descricao;
  };

  return (
    <>
      <CardCadapio>
        <ImgCardapio capa={capa}>
          <Etiqueta>
            <Tag style={destacado ? {} : { backgroundColor: "transparent" }}>
              {destacado ? "Destaque" : ""}
            </Tag>
            <Tag>{tipo}</Tag>
          </Etiqueta>
        </ImgCardapio>
        <Borda>
          <CadapiorListaTag>
            <li>
              <h3>{titulo}</h3>
            </li>
            <li>
              <Nota>
                {avaliacao} <ImgEstrela src={Estrela} />
              </Nota>
            </li>
          </CadapiorListaTag>
          <TextCardapio>{limitarDescricao(descricao)}</TextCardapio>
          <Link to={`/${id}`}>Saiba mais</Link>
        </Borda>
      </CardCadapio>
    </>
  );
};

export default Cardapio;
