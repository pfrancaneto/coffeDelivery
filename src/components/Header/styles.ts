import styled from "styled-components";
import { MapPin } from 'phosphor-react';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
`;

export const ActionsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple_light']};
    color: ${(props) => props.theme['purple_dark']}
  }

  a {
    display: inline-block;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow_light']}
  }
`;

