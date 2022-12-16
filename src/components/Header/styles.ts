import styled, { css } from 'styled-components';

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['background']};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ActionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: none;
  position: relative;
  font-size: 0.875rem;
  cursor: inherit;

  ${({ theme, variant }) => css`
    background-color: ${theme[`${variant}_light`]};
    color: ${theme[`${variant}_dark`]};
  `}

  ${({ theme, variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme['purple']};
      }
    `}
`;
