import { useState } from "react";

import Products from "./home/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./home/Cart";
import Menubar from "./home/Menubar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:category" element={<Products />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
