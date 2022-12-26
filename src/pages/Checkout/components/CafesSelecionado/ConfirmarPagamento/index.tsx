import { Button } from '../../../../../components/Button';
import { useCart } from '../../../../../hooks/useCart';
import { formatarDinheiro } from '../../../../../Utils/formatarDinheiro';
import { ConfirmarPagamentoContainer } from './styles';

const VALOR_ENTREGA = 3.5;

export const ConfirmarPagamento = () => {
  const { quantidadeItemCarrinho, somaTotalItems } = useCart();
  const valorTotalCarrinho = VALOR_ENTREGA + somaTotalItems;

  const itensTotal = formatarDinheiro(somaTotalItems);
  const totalCarrinho = formatarDinheiro(valorTotalCarrinho);
  const valorEntrega = formatarDinheiro(VALOR_ENTREGA);

  return (
    <ConfirmarPagamentoContainer>
      <div>
        <span>Total de Itens</span>
        <span>R$ {itensTotal}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {valorEntrega}</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>R$ {totalCarrinho}</span>
      </div>
      <Button
        text="Confirmar Pedido"
        type="submit"
        disabled={quantidadeItemCarrinho <= 0}
      />
    </ConfirmarPagamentoContainer>
  );
};
