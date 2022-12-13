import { Minus, Plus } from 'phosphor-react';
import { IconeWrapper, InputQuantidadeContainer } from './styles';

interface InputQuantidadeProps {
  quantidade: number;
  size?: 'medium' | 'small';
}

export const InputQuantidade = ({
  quantidade,
  size = 'medium',
}: InputQuantidadeProps) => {
  return (
    <InputQuantidadeContainer size={size}>
      <IconeWrapper disabled={quantidade <= 1}>
        <Minus size={14} weight="fill" />
      </IconeWrapper>
      <input type="number" value={quantidade} />
      <IconeWrapper>
        <Plus size={14} weight="fill" />
      </IconeWrapper>
    </InputQuantidadeContainer>
  );
};
