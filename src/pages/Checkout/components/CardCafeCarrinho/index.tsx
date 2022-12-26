import { Trash } from 'phosphor-react';
import { InputQuantidade } from '../../../../components/InputQuantidade';
import { CartItem } from '../../../../Context/CartContext';
import { useCart } from '../../../../hooks/useCart';
import { formatarDinheiro } from '../../../../Utils/formatarDinheiro';
import {
  AcoesContainer,
  BotaoRemover,
  CardCafeCarrinhoContainer,
  Title,
} from './styles';

interface CardCafeCarrinhoProps {
  cafe: CartItem;
}

export const CardCafeCarrinho = ({ cafe }: CardCafeCarrinhoProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const totalCafe = cafe.preco * cafe.quantidade;

  const formatarPreco = formatarDinheiro(totalCafe);

  function handleIncrease() {
    changeCartItemQuantity(cafe.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(cafe.id, 'decrease');
  }

  function handleRemoveItemCart() {
    removeCartItem(cafe.id);
  }

  return (
    <CardCafeCarrinhoContainer>
      <div>
        <img src={`/cafes/${cafe.imagem}`} />
        <div>
          <Title>{cafe.nome}</Title>
          <AcoesContainer>
            <InputQuantidade
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={cafe.quantidade}
            />
            <BotaoRemover onClick={handleRemoveItemCart}>
              <Trash size={16} />
              Remover
            </BotaoRemover>
          </AcoesContainer>
        </div>
      </div>
      <p>R$ {formatarPreco}</p>
    </CardCafeCarrinhoContainer>
  );
};
