import styled from "styled-components";

export const EnderecoFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: .75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
  `;
