import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { ContentContainer, InputPagamentoContainer } from './styles';

type InputPagamentoProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const InputPagamento = forwardRef<HTMLInputElement, InputPagamentoProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <InputPagamentoContainer>
        <input
          id={id}
          type="radio"
          {...props}
          name="metodoPagamento"
          ref={ref}
        />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </InputPagamentoContainer>
    );
  },
);
