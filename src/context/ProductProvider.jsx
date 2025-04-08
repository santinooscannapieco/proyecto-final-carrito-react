import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import Swal from "sweetalert2";

export const ProductProvider = ({ children }) => {
  const urlBase = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(urlBase);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un problema al cargar los productos",
      });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
