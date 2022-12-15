import { Trash } from 'phosphor-react';
import { InputQuantidade } from '../../../../components/InputQuantidade';
import {
  AcoesContainer,
  BotaoRemover,
  CardCafeCarrinhoContainer,
  Title,
} from './styles';

export const CardCafeCarrinho = () => {
  return (
    <CardCafeCarrinhoContainer>
      <div>
        <img src="/cafes/americano.png" alt="" />
        <div>
          <Title>Expresso Tradicional</Title>
          <AcoesContainer>
            <InputQuantidade size='small' />
            <BotaoRemover>
              <Trash size={16} />
              Remover
            </BotaoRemover>
          </AcoesContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CardCafeCarrinhoContainer>
  );
};
