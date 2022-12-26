import { Minus, Plus } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { IconeWrapper, InputQuantidadeContainer } from './styles';
interface InputQuantidadeProps {
  size?: 'medium' | 'small';
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export const InputQuantidade = ({
  size = 'medium',
  onDecrease,
  onIncrease,
  quantity,
}: InputQuantidadeProps) => {
  return (
    <InputQuantidadeContainer size={size}>
      <IconeWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconeWrapper>
      <input type="number" readOnly value={quantity} />
      <IconeWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconeWrapper>
    </InputQuantidadeContainer>
  );
};
