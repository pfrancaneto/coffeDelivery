import styled from "styled-components";

export const ConfirmarPagamentoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .total {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;