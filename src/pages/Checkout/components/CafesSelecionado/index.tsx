import { CardCafeCarrinho } from '../CardCafeCarrinho';
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
      </DetalhesContainer>
    </CafesSelecionadoContainer>
  );
};
