import { NavLink } from 'react-router-dom';
import {
  ActionsHeaderContainer,
  HeaderButton,
  HeaderContainer,
} from './styles';
import { MapPin, ShoppingCart, SpeakerNone } from 'phosphor-react';

import Logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';

export const Header = () => {
  const { cartItems } = useCart();
  const quantidadePedidos = cartItems.length;

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="Coffe Delivery" />
        </NavLink>
        <ActionsHeaderContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {quantidadePedidos >= 1 && <span>{quantidadePedidos}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </ActionsHeaderContainer>
      </div>
    </HeaderContainer>
  );
};
