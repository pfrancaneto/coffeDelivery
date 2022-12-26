import { ConfirmacaoPedidoContainer, DetalhesPedidoContainer } from './styles';
import bgEntrega from '../../assets/bg-entrega.png';
import { IconeInfo } from '../../components/IconeInfo';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { PedidoData } from '../Checkout';
import { metodosPagamento } from '../Checkout/components/CheckoutForm/OpcaoPagamento';
import { useEffect } from 'react';

interface LocationType {
  state: PedidoData;
}

export const ConfirmacaoPedido = () => {
  const { purple, yellow, yellow_dark } = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <ConfirmacaoPedidoContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até vc</p>
      </div>
      <section>
        <DetalhesPedidoContainer>
          <IconeInfo
            icone={<MapPin weight="fill" />}
            iconeBgColor={purple}
            descricao={
              <span>
                Entrega em{' '}
                <strong>
                  {state.rua}, {state.numero}
                </strong>
                <br />
                {state.bairro} - {state.cidade}, {state.uf}
              </span>
            }
          />
          <IconeInfo
            icone={<Clock weight="fill" />}
            iconeBgColor={yellow}
            descricao={
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            }
          />
          <IconeInfo
            icone={<CurrencyDollar weight="fill" />}
            iconeBgColor={yellow_dark}
            descricao={
              <span>
                Pagamento na entrega
                <br />
                <strong>{metodosPagamento[state.metodoPagamento].label}</strong>
              </span>
            }
          />
        </DetalhesPedidoContainer>
        <img src={bgEntrega} alt="" />
      </section>
    </ConfirmacaoPedidoContainer>
  );
};
