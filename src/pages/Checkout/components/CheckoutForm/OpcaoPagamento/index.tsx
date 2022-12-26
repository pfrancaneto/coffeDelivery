import { Bank, CreditCard, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { InputPagamento } from '../../InputPagamento';
import { OpcaoPagamentoContainer } from './styles';

export const metodosPagamento = {
  credito: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debito: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  dinheiro: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

export const OpcaoPagamento = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const opcaoPagamentoError = errors?.metodoPagamento
    ?.message as unknown as string;

  return (
    <OpcaoPagamentoContainer>
      {Object.entries(metodosPagamento).map(([key, { label, icon }]) => (
        <InputPagamento 
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('metodoPagamento')}
        />
      ))}

      {opcaoPagamentoError && <p>{opcaoPagamentoError}</p>}
    </OpcaoPagamentoContainer>
  );
};
