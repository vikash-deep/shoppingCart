import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./Cartcontext";
import { useState, useEffect } from "react";

const App = () => {
  const [cart, setCart] = useState({});

  //fetching cart items from local storage
  useEffect(() => {
    // const cart = window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [])

  useEffect(() => {
    // const cart = window.localStorage.getItem('cart')
  }, [])

 






  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:_id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
