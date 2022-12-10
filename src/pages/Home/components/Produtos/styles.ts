import styled from 'styled-components';

export const ProdutosContainer = styled.section`
  margin-top: 6.25rem;

  h2 {
    margin-bottom: 3.125rem;
  }
`;

export const ListaItens = styled.div`
  margin-bottom: 40px;
`;

export const Item = styled.div`
  max-width: 256px;
  background-color: ${(props) => props.theme['base_card']};
  padding: 20px;
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  img {
    margin-top: -40px;
  }
`;

export const ItemInfo = styled.div`
  span {
    background-color: ${(props) => props.theme['yellow_light']};
    color: ${(props) => props.theme['yellow_dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 25px;
    width: 80px;
    padding: 4px 8px;
    margin: 0.75rem auto 0;
    display: block;
  }

  h3 {
    color: ${(props) => props.theme['base_subtitle']};
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme['base_label']};
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;
export const ItemPreco = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  input {
    width: 72px;
    height: 38px;
    padding: 8px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base_button']};
    color: ${(props) => props.theme['base_title']};
  }
`;

export const Valor = styled.div`
  display: flex;
  align-items: baseline;
  gap: .2rem;

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

export const ButtonCarrinho = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple_dark']};
  color: ${(props) => props.theme['base_card']};
  padding: 0.5rem;
  cursor: pointer;
`;
