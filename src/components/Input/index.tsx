import { InputHTMLAttributes } from "react"
import { InputStylesContainer } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <InputStylesContainer {...props} />
  )
}