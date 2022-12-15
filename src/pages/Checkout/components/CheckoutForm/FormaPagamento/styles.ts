import styled from "styled-components";

export const FormaPagamentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: .75rem;
`;

export const FormaPagamentoSelect = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme['base_button']};
  color: ${({ theme }) => theme['base_text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .75rem;
  font-size: .75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base_button']};
  transition: .4s;

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base_hover']};
  }

  user-select: none;
`;