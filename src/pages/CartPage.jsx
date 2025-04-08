import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const calculateTotal = () => {
    return shoppingList
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handlerPurchase = () => {
    const productsPurchased = shoppingList
      .map((product) => `${product.title} x ${product.quantity}`)
      .join("\n");

    if (shoppingList.length != 0) {
      Swal.fire({
        icon: "success",
        title: "La compra se ha realizado con exito",
        html: `<p> Has comprado: </p> <pre>${productsPurchased}</pre>`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "El carrito está vacio...",
      });
    }
  };

  return (
    <>
      <h1 className="text-4xl my-5">Carrito</h1>
      <div className="my-5">
        <table className="table-auto w-[1000px]">
          <thead>
            <tr>
              <th className="text-start">Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {shoppingList.map((product) => (
              <tr className="h-[100px] border-b-1" key={product.id}>
                <th className="text-start wrap w-[300px]">{product.title}</th>
                <td>{product.price}</td>
                <td>
                  <button
                    className="py-2 px-3 rounded-lg bg-blue-500 text-white transition duration-500 ease-lineal hover:bg-blue-900 cursor-pointer"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <button className="px-4">{product.quantity}</button>
                  <button
                    className=" py-2 px-3 rounded-lg bg-blue-500 text-white transition duration-500 ease-lineal hover:bg-blue-900 cursor-pointer"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="p-2 rounded-lg bg-red-500 text-white transition duration-500 ease-lineal hover:bg-red-900 cursor-pointer"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            <tr className="h-[50px]">
              <td className="font-bold">TOTAL: </td>
              <td></td>
              <td></td>
              <td>$ {calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="w-100 mt-10 p-2 rounded-lg bg-green-700 text-white transition duration-500 ease-lineal hover:bg-green-900 cursor-pointer"
          onClick={handlerPurchase}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
