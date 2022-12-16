import { rgba } from "polished";
import styled from "styled-components";
import introBackground from '../../../../assets/intro-background.png';

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme['white']} 0%,
      ${rgba(theme['background'], 0.2)} 50%,
      ${theme['background']} 100%
    )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
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