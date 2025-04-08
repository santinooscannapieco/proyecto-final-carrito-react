import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export const CardComponent = ({
  id,
  image,
  title,
  description,
  price,
  handlerAdd,
  handlerRemove,
}) => {
  const { shoppingList } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!added) {
      handlerAdd();
    } else {
      handlerRemove();
    }
    setAdded(!added);
  };

  const checkAdded = () => {
    const boolean = shoppingList.some((product) => product.id == id);
    setAdded(boolean);
  };

  useEffect(() => {
    checkAdded();
  }, []);

  return (
    <div className="bg-white w-[1000px] h-[300px] p-4 flex flex-row items-center gap-5 rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-[150px] h-[150px] object-cover"
      />
      <div className="w-auto flex flex-col items-start  text-start">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm mb-3">{description}</p>
        <p className="font-semibold">$ {price}</p>

        {added ? (
          <button
            type="button"
            className="p-2 rounded-lg bg-red-500 text-white transition duration-500 ease-lineal hover:bg-red-800"
            onClick={handleClick}
          >
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="p-2 rounded-lg bg-blue-500 text-white transition duration-500 ease-lineal hover:bg-blue-800"
            onClick={handleClick}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
