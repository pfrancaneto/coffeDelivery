import styled from 'styled-components';

export const TiposCafeContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['base_subtitle']};
    font-weight: 800;
  }
`;

export const TiposCafeContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;




