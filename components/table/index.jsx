"use client";
import React, { useState } from "react";
import CartItems from "../cartitems";
import List from "../list";

import Styles from "./table.module.scss";
import Input from "../input";

const Table = () => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  function handleAddItemToCart(name, price) {
    const itemObject = { name, price };
    setCart([...cart, itemObject]);
  }

  function handleRemoveItemFromCart(ItemId) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== ItemId
    );
    setCart(filteredCart);
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.tables}>
        <div className={Styles.table2}>
          <h1>Produtos:</h1>
          <List handleAddItemToCart={handleAddItemToCart} />
        </div>
      </div>
      <div className={Styles.table}>
        <h1>Carrinho</h1>
        <div className={Styles.cart}>
          <CartItems
            cart={cart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </div>
        <h2 className="final">
          Preço: ${cart.reduce((acc, current) => acc + current.price, 0)}
        </h2>
      </div>
    </div>
  );
};

export default Table;
