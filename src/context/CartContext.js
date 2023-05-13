import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const estaEnLista = (id) => carrito.find((prod) => prod.id === id);

  const addToCard = (producto, cantidad) => {
    if (estaEnLista(producto.id)) {
      const newCart = carrito.map((cart) => {
        if (cart.id === producto.id) {
          const newCantidad = cart.cantidad + cantidad;
          return {
            ...cart,
            cantidad: newCantidad,
          };
        } else {
          return cart;
        }
      });
      setCarrito(newCart);
    } else {
      const newProduct = { ...producto, cantidad: cantidad };
      setCarrito([...carrito, newProduct]);
    }
  };

  const borrar = (id) => {
    const arrayFiltrado = carrito.filter((prod) => {
      return prod.id !== id;
    });
    setCarrito(arrayFiltrado);
  };

  const reset = () => {
    setCarrito([]);
  };
  const totalPrecio = () => {
    return carrito.reduce(
      (acc, product) => (acc += product.price * product.cantidad),
      0
    );
  };

  const totalCantidad = () => {
    return carrito.reduce((acc, product) => (acc += product.cantidad), 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCard,
        borrar,
        reset,
        estaEnLista,
        totalPrecio,
        totalCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
