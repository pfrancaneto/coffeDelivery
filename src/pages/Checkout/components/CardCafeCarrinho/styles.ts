import styled from 'styled-components';

export const CardCafeCarrinhoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme['base_button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const AcoesContainer = styled.div`
  margin-top: .5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const Title = styled.h3``;

export const BotaoRemover = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme['base_text']};
  font-size: .75rem;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme['base_button']};
  border-radius: 6px;
  padding: 0 .5rem;
  transition: .4s;

  svg {
    color: ${({ theme }) => theme['purple']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base_hover']};
  }
`;
