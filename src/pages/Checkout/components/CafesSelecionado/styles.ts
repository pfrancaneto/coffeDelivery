import styled from "styled-components";
import { BaseSectionStyle } from "../../styles";

export const CafesSelecionadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: .75rem;
`;

export const TitleCafeSelecionado = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme['base_subtitle']};
  font-family: 'Baloo 2', sans-serif;
`;

export const DetalhesContainer = styled(BaseSectionStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const CafeSelecionadoWarpper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: .5rem .25rem;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1.25rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const DescricaoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base_subtitle']};
  }
`;

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;

export const Preco = styled.div`
    gap: 1.25rem;
`;

export const Separador = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme['base_button']};
  margin-top: 1.5rem;
`;