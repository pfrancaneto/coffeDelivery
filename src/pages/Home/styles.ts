import styled from 'styled-components';
import Bg from '../../assets/Background.svg';

export const Teste = styled.div`
  /* background-color: red; */
  background-image: url('${Bg}');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 74rem;
  margin: 0 auto;

  
`;

export const HeaderContent = styled.div`
  max-width: 588px;

  p {
    color: ${(props) => props.theme['base_subtitle']};
    font-size: 1.3rem;
  }
`;

export const TitleHeader = styled.h1`
  color: ${(props) => props.theme['base_title']};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const ListItens = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  margin-top: 4.5rem;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.5rem 0;
`;

export const IconContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};

  svg {
    color: ${(props) => props.theme['white']};
  }
`;
