import {
  HeaderContainer,
  HeaderContent,
  IconContainer,
  ListItem,
  ListItens,
  Teste,
  TitleHeader,
} from './styles';
import BgHome from '../../assets/BgHome.svg';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export const Home = () => (
  <Teste>
    <HeaderContainer>
      <HeaderContent>
        <TitleHeader>
          Encontre o café perfeito para qualquer hora do dia
        </TitleHeader>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ListItens>
          <ListItem>
            <IconContainer bgColor="#C47F17">
              <ShoppingCart weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </ListItem>
          <ListItem>
            <IconContainer bgColor="#574F4D">
              <Package weight="fill" />
            </IconContainer>
            <span>Embalagem mantém o café intacto</span>
          </ListItem>
          <ListItem>
            <IconContainer bgColor="#DBAC2C">
              <Timer weight="fill" />
            </IconContainer>
            <span>Entrega rápida e rastreada</span>
          </ListItem>
          <ListItem>
            <IconContainer bgColor="#8047F8">
              <Coffee weight="fill" />
            </IconContainer>
            <span>O café chega fresquinho até você</span>
          </ListItem>
        </ListItens>
      </HeaderContent>
      <img src={BgHome} alt="Embalagem do Produto" />
    </HeaderContainer>
  </Teste>
);
