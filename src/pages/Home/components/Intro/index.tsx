import { ReactNode } from 'react';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import BgIntro from '../../../../assets/BgHome.svg';
import { IconeInfo } from '../../../../components/IconeInfo';

import { defaultTheme } from '../../../../styles/themes/default';
import {
  BeneficiosContainer,
  IntroContainer,
  IntroContent,
  SubTitleHeader,
  Title,
} from './styles';

type OutDadosBeneficios = {
  id: number;
  icone: ReactNode | string;
  descricao: string;
  iconeBgColor: string;
};

const dados: OutDadosBeneficios[] = [
  {
    id: 0,
    icone: <ShoppingCart weight="fill" />,
    descricao: 'Compra simples e segura',
    iconeBgColor: defaultTheme.yellow_dark,
  },
  {
    id: 1,
    icone: <Package weight="fill" />,
    descricao: 'Embalagem mantém o café intacto',
    iconeBgColor: defaultTheme.base_text,
  },
  {
    id: 2,
    icone: <Timer weight="fill" />,
    descricao: 'Entrega rápida e rastreada',
    iconeBgColor: defaultTheme.yellow,
  },
  {
    id: 3,
    icone: <Coffee weight="fill" />,
    descricao: 'O café chega fresquinho até você',
    iconeBgColor: defaultTheme.purple,
  },
];

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <section>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitleHeader>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubTitleHeader>
          </section>
          <BeneficiosContainer>
            {dados.map((icone) => (
              <IconeInfo
                key={icone.id}
                icone={icone.icone}
                descricao={icone.descricao}
                iconeBgColor={icone.iconeBgColor}
              />
            ))}
          </BeneficiosContainer>
        </div>
        <img src={BgIntro} alt="Embalagem do Produto" />
      </IntroContent>
    </IntroContainer>
  );
};
