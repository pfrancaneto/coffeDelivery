import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;

  background-color: ${(props) => props.theme['background']};
  display: flex;
  flex-direction: column;
`;