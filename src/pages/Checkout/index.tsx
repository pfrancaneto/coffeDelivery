import { CafesSelecionado } from './components/CafesSelecionado';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmacaoFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o Cep'),
  rua: zod.string().min(1, 'Informe a Rua'),
  complemento: zod.string(),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  numero: zod.string().min(1, 'Informe o Número'),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  uf: zod.string().min(1, 'Informe a UF'),
});

export type PedidoData = zod.infer<typeof confirmacaoFormValidationSchema>;

type ConfirmacaoPedidoFormData = PedidoData;

export const Checkout = () => {
  const confirmacaoForm = useForm<ConfirmacaoPedidoFormData>({
    resolver: zodResolver(confirmacaoFormValidationSchema),
  });

  const { handleSubmit } = confirmacaoForm;

  const handleConfirmarPedido = (data: ConfirmacaoPedidoFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...confirmacaoForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmarPedido)}
      >
        <CheckoutForm />
        <CafesSelecionado />
      </CheckoutContainer>
    </FormProvider>
  );
};
