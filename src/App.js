import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Hooks
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [products] = useLocalStorage('data', data);
  const [cart, setCart] = useLocalStorage('cart', []);
  return (
    <ProductContext.Provider value={{ products }}>
      <CartContext.Provider value={{cart, setCart}}>
        <div className="App">
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
