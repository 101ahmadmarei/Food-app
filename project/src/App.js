import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./COMPONENTS/Layout/Header";
import Meals from "./COMPONENTS/Meals/Meals";
import Cart from "./COMPONENTS/Cart/Cart";
import CartProvider from "./COMPONENTS/Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
