import { useContext } from "react";
import { CardComponent } from "../components/CardComponent";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1 className="text-4xl my-5">Productos</h1>
      <div className="container flex flex-wrap justify-center gap-5 my-5">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            handlerAdd={() => addProduct(product)}
            handlerRemove={() => removeProduct(product.id)}
          />
        ))}
      </div>
    </>
  );
};
