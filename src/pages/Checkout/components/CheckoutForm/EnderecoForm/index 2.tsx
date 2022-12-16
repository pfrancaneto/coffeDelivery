import { Input } from "../../../../../components/Input"
import { EnderecoFormContainer } from "./styles"

export const EnderecoForm = () => {
  return (
    <EnderecoFormContainer>
      <Input placeholder="CEP" type='number' className="cep" />
      <Input placeholder="Rua" className="rua" />
      <Input placeholder="Número" type='number' />
      <Input placeholder="Complemento" className="complemento" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </EnderecoFormContainer>
  )
}