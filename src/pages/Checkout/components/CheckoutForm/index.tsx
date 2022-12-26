import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { TituloSection } from '../TituloSection';
import { EnderecoForm } from './EnderecoForm';
import { OpcaoPagamento } from './OpcaoPagamento';
import { CheckoutFormContainer, SectionFormContainer, Title } from './styles';

export const CheckoutForm = () => {
  return (
    <CheckoutFormContainer>
      <Title>Complete o seu Pedido</Title>
      <SectionFormContainer>
        <TituloSection
          titulo="Endereço de Entrega"
          subTitulo="Informe o endereço onde deseja receber seu pedido"
          icone={<MapPinLine color="#C47F17" size={22} />}
        />
        <EnderecoForm />
      </SectionFormContainer>
      <SectionFormContainer>
        <TituloSection
          titulo="Pagamento"
          subTitulo="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icone={<CurrencyDollar color="#8047F8" size={22} />}
        />
        <OpcaoPagamento />
      </SectionFormContainer>
    </CheckoutFormContainer>
  );
};
