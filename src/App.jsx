import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Product from "./Components/Product";
import Navbar1 from "./Components/Navbar1";

import Footer from "./Components/Footer";
import Privacy from "./Components/Privacy";
import Refund from "./Components/Refund";
import Login from "./Components/Login";
import ProductList from "./Components/Productlist";
import ProductDetail from "./Components/Productdetail";
import Checkout from "./Components/Checkout";
import ConfirmPayment from "./Components/confirmpayment";
import { CartProvider } from './Components/Context/CartContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navbar1 />
        <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
                
          <Route path="/login" element={<Login/>}></Route>        
          <Route path="/privacy" element={<Privacy/>}></Route> 
          <Route path="/refund" element={<Refund />}></Route>  
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
         <Route path="/confirm-payment" element={<ConfirmPayment />} />
           
        </Routes>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
