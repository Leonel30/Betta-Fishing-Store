import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };

  const removeCartItem = (ItemId) => {
    setItems(items.filter((item) => item.item.id != ItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const SubTotalPrice = (price, quantity) => {
    return Number((price * quantity).toFixed(2));
  };

  const TotalItem = () => {
    return Number(items.reduce((acc, item) => acc + item.quantity, 0));
  };

  const TotalPrice = () => {
    return Number(
      items.reduce(
        (acc, itemCart) => (acc += itemCart.quantity * itemCart.item.price),
        0
      )
    );
  };


  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        clearCart,
        removeCartItem,
        SubTotalPrice,
        TotalItem,
        TotalPrice,
      }}
    >
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
