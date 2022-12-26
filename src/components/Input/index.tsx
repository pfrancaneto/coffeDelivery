import { forwardRef, InputHTMLAttributes } from 'react';
import {
  InputStyled,
  InputStylesContainer,
  InputWrapper,
  TextoOpcional,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  textoDireita?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, textoDireita, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStylesContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {textoDireita && <TextoOpcional>{textoDireita}</TextoOpcional>}
        </InputStylesContainer>
        {error && <p>{error}</p>}
      </InputWrapper>
    );
  },
);
