import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme['base_error']};
    font-size: .75rem;
  }
`;

interface InputStylesContainerProps {
  hasError: boolean;
}

export const InputStylesContainer = styled.div<InputStylesContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base_button']};
  background: ${({ theme }) => theme['base_input']};
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme['yellow_dark']};
  }

  ${({ theme, hasError }) => hasError && css`
    border-color: ${theme['base_error']};
  `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme['base_text']};

  &::placeholder {
    color: ${({ theme }) => theme['base_label']};
  }
`;

export const TextoOpcional = styled.p`
  font-size: .75rem;
  margin-right: .75rem;
  font-style: italic;
  color: ${({ theme }) => theme['base_label']};
`;