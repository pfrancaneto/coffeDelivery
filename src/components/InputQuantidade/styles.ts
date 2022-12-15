import styled, { css } from 'styled-components';

interface InputQtdeContainerProps {
  size: 'medium' | 'small';
}

export const InputQuantidadeContainer = styled.div<InputQtdeContainerProps>`
  flex: 1;
  background-color: ${(props) => props.theme['base_button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    color: ${(props) => props.theme['base_title']};
    -moz-appearance: textfield;
    -webkit-appearance: none;
    appearance: textfield;
    margin: 0;

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconeWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme['purple']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme['purple_dark']};
  }
`;
