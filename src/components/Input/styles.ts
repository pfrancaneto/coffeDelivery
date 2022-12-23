import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme['base_error']};
    font-size: .75rem;
  }
`;

export const InputStylesContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme['base_input']};
  border: 1px solid ${({ theme }) => theme['base_button']};
  transition: .4s;

  &:focus {
    border-color: ${({ theme }) => theme['yellow_dark']};
  }

  color: ${({ theme }) => theme['base_text']};
  font-size: .75rem;
  padding: 0 .75rem;

  &::placeholder {
    color: ${({ theme }) => theme['base_label']};
  }
`;