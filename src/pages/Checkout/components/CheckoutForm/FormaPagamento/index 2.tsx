import { CreditCard } from "phosphor-react";
import { FormaPagamentoContainer, FormaPagamentoSelect } from "./styles";

export const FormaPagamento = () => {
  return (
    <FormaPagamentoContainer>
      <FormaPagamentoSelect>
        <CreditCard size={16} />
        Cartão de Crédito
      </FormaPagamentoSelect>
      <FormaPagamentoSelect>
        <CreditCard size={16} />
        Cartão de Crédito
      </FormaPagamentoSelect>
      <FormaPagamentoSelect>
        <CreditCard size={16} />
        Cartão de Crédito
      </FormaPagamentoSelect>
    </FormaPagamentoContainer>
  );
}