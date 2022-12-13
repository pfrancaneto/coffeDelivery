import { ReactNode } from 'react';
import { IconeContainer, IconeInfoContainer } from './styles';

interface IconeInfoProps {
  icone: ReactNode;
  descricao: string | ReactNode;
  iconeBgColor: string;
}

export const IconeInfo = ({
  icone,
  descricao,
  iconeBgColor,
}: IconeInfoProps) => {
  return (
    <IconeInfoContainer>
      <IconeContainer iconeBgColor={iconeBgColor}>{icone}</IconeContainer>
      {typeof descricao === 'string' ? <p>{descricao}</p> : descricao}
    </IconeInfoContainer>
  );
};
