import { createContext, ReactNode, useState } from 'react';
import { Cafe } from '../pages/Home/components/CardCafe';
import { produce } from 'immer';

export interface CartItem extends Cafe {
  quantidade: number;
}

interface CartContextType {
  cartItems: CartItem[];
  adicionarCafeCarrinho: (cafe: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function adicionarCafeCarrinho(cafe: CartItem) {
    const cafeSelecionadoCarrinho = cartItems.findIndex(
      (cartItem) => cartItem.id === cafe.id,
    );

    const novoItem = produce(cartItems, (item) => {
      if (cafeSelecionadoCarrinho < 0) {
        item.push(cafe);
      } else {
        item[cafeSelecionadoCarrinho].quantidade += cafe.quantidade;
      }
    });

    setCartItems(novoItem);
  }
  
  return (
    <CartContext.Provider value={{ cartItems, adicionarCafeCarrinho }}>
      {children}
    </CartContext.Provider>
  );
}
