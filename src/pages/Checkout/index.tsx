import { CafesSelecionado } from './components/CafesSelecionado';
import { CheckoutForm } from './components/CheckoutForm';
import {
  CheckoutContainer,
} from './styles';

export const Checkout = () => {
  return (
    <CheckoutContainer className='container'>
      <CheckoutForm />
      <CafesSelecionado />
    </CheckoutContainer>
  );
};
