import { CardCafeCarrinho } from '../CardCafeCarrinho';
import { ConfirmarPagamento } from './ConfirmarPagamento';
import {
  CafesSelecionadoContainer,
  DetalhesContainer,
  TitleCafeSelecionado,
} from './styles';

export const CafesSelecionado = () => {
  return (
    <CafesSelecionadoContainer>
      <TitleCafeSelecionado>Cafés Selecionados</TitleCafeSelecionado>
      <DetalhesContainer>
        <CardCafeCarrinho />
        <CardCafeCarrinho />

        <ConfirmarPagamento />
      </DetalhesContainer>
    </CafesSelecionadoContainer>
  );
};
