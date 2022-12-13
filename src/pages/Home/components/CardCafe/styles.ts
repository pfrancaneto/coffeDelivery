import styled from 'styled-components';

export const CardCafeContainer = styled.div`
  width: 100%;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme['base_card']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.25rem;
  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme['yellow_light']};
    color: ${({ theme }) => theme['yellow_dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
  }
`;

export const NomeCafe = styled.h3`
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme['base_subtitle']};
  margin-top: 1rem;
`;

export const Descricao = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base_label']};
  margin-top: 0.5rem;
`;

export const FooterCardCafe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  p {
    display: block;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base_text']};
  }

  span {
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme['base_text']};
  }
`;

export const CarrinhoContainer = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple_dark']};
    color: ${(props) => props.theme['base_card']};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background-color: ${({ theme }) => theme['purple']};
    }
  }
`;
