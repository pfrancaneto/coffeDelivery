import styled from "styled-components";

export const TituloSectionContainer = styled.div`
  display: flex;
  gap: .5rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme['base_subtitle']};
  }

  span {
    font-size: .875rem;
    color: ${({ theme }) => theme['base_text']}
  }
`;