import { useCart } from '../../../../hooks/useCart';
import { CardCafeCarrinho } from '../CardCafeCarrinho';
import { ConfirmarPagamento } from './ConfirmarPagamento';
import {
  CafesSelecionadoContainer,
  DetalhesContainer,
  TitleCafeSelecionado,
} from './styles';

export const CafesSelecionado = () => {
  const { cartItems } = useCart();

  return (
    <CafesSelecionadoContainer>
      <TitleCafeSelecionado>Cafés Selecionados</TitleCafeSelecionado>
      <DetalhesContainer>
        {cartItems.map((item) => (
          <CardCafeCarrinho key={item.id} cafe={item} />
        ))}

        <ConfirmarPagamento />
      </DetalhesContainer>
    </CafesSelecionadoContainer>
  );
};
