import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);

    items.push(item);
    console.log("inside addItemTCarthandler", cartContext);
  };

  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "Click Here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("Inside cartContext.Provider", cartContext)};{props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
