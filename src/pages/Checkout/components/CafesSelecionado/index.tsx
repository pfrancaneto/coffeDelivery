import { InputQuantidade } from '../../../../components/InputQuantidade';
import { CardCafeCarrinho } from '../CardCafeCarrinho';
import {
  Acoes,
  CafeSelecionadoWarpper,
  CafesSelecionadoContainer,
  DescricaoContent,
  DetalhesContainer,
  Preco,
  Separador,
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
        {/* <CafeSelecionadoWarpper>
          <div>
            <img src="/cafes/americano.png" alt="" />
            <DescricaoContent>
              <span>Expresso Tradicional</span>
              <Acoes>
                <InputQuantidade size='small' />
                <button>button</button>
              </Acoes>
            </DescricaoContent>
          </div>

          <Preco>
            <span>R$ 9,90</span>
          </Preco>
        </CafeSelecionadoWarpper>
        <Separador /> */}
    </CafesSelecionadoContainer>
  );
};
