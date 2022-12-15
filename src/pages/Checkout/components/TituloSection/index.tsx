import { ReactNode } from 'react';
import { TituloSectionContainer } from './styles';

interface TituloSectionProps {
  titulo: string;
  subTitulo: string;
  icone: ReactNode;
}

export const TituloSection = ({
  titulo,
  subTitulo,
  icone,
}: TituloSectionProps) => {
  return (
    <TituloSectionContainer>
      {icone}
      <div>
        <strong>{titulo}</strong>
        <span>{subTitulo}</span>
      </div>
    </TituloSectionContainer>
  );  
};
