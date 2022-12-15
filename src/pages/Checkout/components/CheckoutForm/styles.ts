import styled from "styled-components";
import { BaseSectionStyle } from "../../styles";

export const CheckoutFormContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme['base_subtitle']};
  font-family: 'Baloo 2', sans-serif;
`;

export const SectionFormContainer = styled(BaseSectionStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;