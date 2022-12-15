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
`;''
