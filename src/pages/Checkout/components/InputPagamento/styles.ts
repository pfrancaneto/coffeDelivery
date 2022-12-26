import styled, { css } from 'styled-components';

export const InputPagamentoContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple_light']};
      border-color: ${theme['purple']};

      &:hover {
        background: ${theme['purple_light']};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme['base_button']};
  color: ${({ theme }) => theme['base_text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base_button']};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    background: ${({ theme }) => theme['base_hover']};
  }

  user-select: none;
`;
