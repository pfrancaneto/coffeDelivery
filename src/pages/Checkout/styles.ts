import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const BaseSectionStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base_card']};
`;

export const TitlePedido = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme['base_subtitle']};
  font-family: 'Baloo 2', sans-serif;
  margin-bottom: 1rem;
`;

export const PedidoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
