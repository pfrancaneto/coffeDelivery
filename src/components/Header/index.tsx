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
        <img src={Logo} alt="Coffe Delivery" />
        <ActionsHeaderContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </ActionsHeaderContainer>
      </div>
    </HeaderContainer>
  );
};
