import React from "react";
import { NavBarComponent } from "./components/NavBarComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { ProductProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="flex flex-col items-center">
          <NavBarComponent />
          <div className="container flex flex-col items-center">
            <Routes>
              <Route path="/" element={<ProductsPage />}></Route>
              <Route path="/carrito" element={<CartPage />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};
