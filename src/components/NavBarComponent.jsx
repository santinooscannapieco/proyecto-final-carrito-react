import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const NavBarComponent = () => {
  const { shoppingList } = useContext(CartContext);

  return (
    <>
      <nav className="container mt-5">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            SuperCompras
          </NavLink>
          <NavLink to="/carrito">
            <Badge badgeContent={shoppingList.length} color="primary">
              <ShoppingCart className="text-4xl" />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
