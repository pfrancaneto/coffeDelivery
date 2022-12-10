import styled from "styled-components";

interface IconeContainerProps {
  iconeBgColor: string;
}

export const IconeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconeContainer = styled.div<IconeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.iconeBgColor};
  color: ${(props) => props.theme['white']};
`;