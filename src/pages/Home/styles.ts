import { Package, ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  max-width: 558px;

  p {
    color: ${(props) => props.theme['base_subtitle']};
    font-size: 1.3rem;
  }
`;

export const TitleHeader = styled.h1`
  color: ${(props) => props.theme['base_title']};
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const Icon = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base_text']};
    font-size: 1rem;
  }
`;

export const IconCar = styled(ShoppingCart)`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow_dark']};
  color: ${(props) => props.theme['white']}
`;

export const IconPackage = styled(Package)`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['base_text']};
  color: ${(props) => props.theme['white']}
`;

