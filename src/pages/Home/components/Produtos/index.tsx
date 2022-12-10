import { ShoppingCart } from 'phosphor-react';
import Expresso from '../../../../assets/expresso.svg';
import {
  ButtonCarrinho,
  BuyContainer,
  Item,
  ItemInfo,
  ItemPreco,
  ListaItens,
  ProdutosContainer,
  Valor,
} from './styles';

export const Produtos = () => (
  <ProdutosContainer>
    <h2>Nossos Cafés</h2>
    <ListaItens>
      <Item>
        <img src={Expresso} alt="Café Expresso" />
        <ItemInfo>
          <span>Tradicional</span>
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </ItemInfo>
        <ItemPreco>
          <Valor>
            <span>R$</span>
            <p>9,90</p>
          </Valor>
          <BuyContainer>
            <input type="number" />
            <ButtonCarrinho>
              <ShoppingCart weight="fill" size={20} />
            </ButtonCarrinho>
          </BuyContainer>
        </ItemPreco>
      </Item>
    </ListaItens>
  </ProdutosContainer>
);
