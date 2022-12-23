import { forwardRef, InputHTMLAttributes } from "react"
import { InputStylesContainer, InputWrapper } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className,  ...props}, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStylesContainer {...props} ref={ref} />
        {error && (
          <p>{error}</p>
        )}
      </InputWrapper>
    )
  }
)