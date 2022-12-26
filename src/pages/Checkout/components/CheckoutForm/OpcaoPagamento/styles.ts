import styled from "styled-components";

export const OpcaoPagamentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: .75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme['base_error']};
  }
`;
