import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./cart.css";
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { totalCantidad } = useCartContext();
  return (
    <>
      <li id="icon_cart">
        <Link className="cart">
          <p>
            {" "}
            <BsCart4 className="item_cart" />
           {totalCantidad()} 
          </p>
        </Link>
      </li>
    </>
  );
};

export default CartWidget;