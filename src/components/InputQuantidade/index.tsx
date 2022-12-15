import { Minus, Plus } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { IconeWrapper, InputQuantidadeContainer } from './styles';
interface InputQuantidadeProps {
  size?: 'medium' | 'small';
}

export const InputQuantidade = ({ size = 'medium' }: InputQuantidadeProps) => {
  const [unidade, setUnidade] = useState(1);

  const adicionarQuantidade = useCallback(() => {
    setUnidade((state) => state + 1);
  }, []);

  const removerQuantidade = useCallback(() => {
    setUnidade((state) => state - 1);
  }, []);

  return (
    <InputQuantidadeContainer size={size}>
      <IconeWrapper onClick={removerQuantidade} disabled={unidade <= 1}>
        <Minus size={14} weight="fill" />
      </IconeWrapper>
      <input type="number" readOnly value={unidade} />
      <IconeWrapper onClick={adicionarQuantidade}>
        <Plus size={14} weight="fill" />
      </IconeWrapper>
    </InputQuantidadeContainer>
  );
};
