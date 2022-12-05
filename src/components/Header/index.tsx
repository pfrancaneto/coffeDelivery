import { ActionsHeader, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';

import Logo from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffe Delivery" />
      <ActionsHeader>
        <span>
          <MapPin color='#8047F8' size={32} weight="fill" />
          Governador Valadares, MG
        </span>
        <a href="">
          <ShoppingCart color="#C47F17" size={32} weight="fill" />
        </a>
      </ActionsHeader>
    </HeaderContainer>
  );
};