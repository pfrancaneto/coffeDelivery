import { NavLink } from 'react-router-dom';
import {
  ActionsHeaderContainer,
  HeaderButton,
  HeaderContainer,
} from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

import Logo from '../../assets/logo.svg';

export const Header = () => {
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
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </ActionsHeaderContainer>
      </div>
    </HeaderContainer>
  );
};
