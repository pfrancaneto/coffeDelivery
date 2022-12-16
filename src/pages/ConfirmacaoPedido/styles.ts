import styled from "styled-components";

export const ConfirmacaoPedidoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  h1 {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['yellow_dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DetalhesPedidoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme['background']};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;