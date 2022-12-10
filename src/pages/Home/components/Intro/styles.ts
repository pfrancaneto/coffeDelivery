import styled from "styled-components";

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme['base_title']};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 700;
`;

export const SubTitleHeader = styled.p`
  color: ${(props) => props.theme['base_subtitle']};
  font-size: 1.25rem;
  margin-top: 1rem;
`;

export const BeneficiosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;