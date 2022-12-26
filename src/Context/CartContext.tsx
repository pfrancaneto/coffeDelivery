import { createContext, ReactNode, useState } from 'react';
import { Cafe } from '../pages/Home/components/CardCafe';
import { produce } from 'immer';

export interface CartItem extends Cafe {
  quantidade: number;
}

interface CartContextType {
  cartItems: CartItem[];
  adicionarCafeCarrinho: (cafe: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  limparCarrinho: () => void;
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

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantidade =
          type === 'increase' ? item.quantidade + 1 : item.quantidade - 1;
      }
    });

    setCartItems(newCart);
  }

  function limparCarrinho() {
    setCartItems([]);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        adicionarCafeCarrinho,
        changeCartItemQuantity,
        removeCartItem,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
