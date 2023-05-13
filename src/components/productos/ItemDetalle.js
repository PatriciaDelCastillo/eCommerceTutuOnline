import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import "./style/itemdetalle.css";
const ItemDetalle = ({ prod }) => {
  // console.log(producto);
  const [isButtonpPressed, setIsButtonpPressed] = useState(false);
  const { addToCard } = useCartContext();

  const onAdd = (count) => {
    setIsButtonpPressed(true);
    addToCard(prod, count);
  };
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardImageContainer>
            <CardImagen src={prod.image} alt={prod.title} />
          </CardImageContainer>
          <CardTextWrapper>
            <CardTextTitle>{prod.title}</CardTextTitle>
            <CardTextTitle>{prod.category}</CardTextTitle>
            <CardTextBody>{prod.description}</CardTextBody>
            <CardTextBody>Stock: {prod.stock}</CardTextBody>
            <CardTextBody>Precio: ${prod.price}</CardTextBody>

            <CardTextBody>Envio Gratis</CardTextBody>
            {isButtonpPressed ? (
              <Link to="/cart" className="linkText">
                <button>Ir al Carrito</button>
              </Link>
            ) : (
              <ItemQuantitySelector
                initial={1}
                stock={prod.stock}
                onAdd={onAdd}
              />
            )}
          </CardTextWrapper>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default ItemDetalle;
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
`;
const CardWrapper = styled.div`
  display: flex;
  //flex-direction:on-line;
  align-items: center;
  width: 100%;
  height: 150%;
  border-radius: 7px;

  cursor: pointer;
  border-radius: 5px;

  background-color: rgb(255, 255, 255);
`;
const CardImageContainer = styled.div``;
const CardImagen = styled.img`
  width: 50%;
  margin: 10px 40px;
  padding: 30px;
  //border: 1px solid red;
  box-shadow: 0px 2px 2px rgba(0.5, 0, 0, 10);
`;
const CardTextWrapper = styled.div`
  margin: 5px;
  // border: 1px solid red;
`;
const CardTextTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: #1a202c;
  font-family: Arial, Helvetica, sans-serif;
`;

const CardTextBody = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
