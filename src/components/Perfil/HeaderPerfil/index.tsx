import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../../assets/images/cart.png";
import { RootReducer } from "../../../store";
import BannerPerfil from "../BannerPerfil";
import {
  CartButton,
  ContainerPerfil,
  HeaderContainer,
  ImaLogo,
  PerfilList,
  SpanNotification,
} from "./styles";

import Logo from "../../../assets/images/logo.png";

import { open } from "../../../store/reducer/cart";
import { Restaurante } from "../../../types/Restaurante";

type Props = {
  restaurante: Restaurante;
};

const HeaderPerfil = ({ restaurante }: Props) => {
  const dispatch = useDispatch();

  const OpenCart = () => {
    dispatch(open());
  };

  const { items } = useSelector((state: RootReducer) => state.cart);

  return (
    <HeaderContainer>
      <ContainerPerfil>
        <PerfilList>
          <li>Restaurante</li>
          <li>
            <Link to="/">
              <ImaLogo src={Logo} alt="" />
            </Link>
          </li>
          <CartButton onClick={OpenCart}>
            {items.length > 0 && (
              <SpanNotification>{items.length}</SpanNotification>
            )}
            <img src={cart} alt="Cesta de Compras" />
          </CartButton>
        </PerfilList>
      </ContainerPerfil>
      <BannerPerfil
        key={restaurante.id}
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
    </HeaderContainer>
  );
};
export default HeaderPerfil;
