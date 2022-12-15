import { Button } from "../../../../../components/Button";
import { ConfirmarPagamentoContainer } from "./styles";

export const ConfirmarPagamento = () => {
  return (
    <ConfirmarPagamentoContainer>
      <div>
        <span>Total de Itens</span>
        <span>R$ 9,90</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>R$ 29,90</span>
      </div>
      <Button text='Confirmar Pedido' />
    </ConfirmarPagamentoContainer>
  );
}