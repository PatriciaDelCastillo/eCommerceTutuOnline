import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style/itemdetalle.css";


const ItemQuantitySelector = ({ initial, stock, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const add = () => {
    count < stock && setCount(count + 1);
  };
  const subtract = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <>
      <div>
        <CardTextBody>Cantidad</CardTextBody>
        <Ul>
          <li>
            <Link className="linkCount" onClick={subtract}>
              -
            </Link>
          </li>
          <li>
            <span className="linkCount">{count}</span>
          </li>
          <li>
            <Link className="linkCount" onClick={add}>
              +
            </Link>
          </li>
        </Ul>

        <div>
          <Link onClick={() => onAdd(count)}>Agrega Al Carrito</Link>
        </div>
      </div>
    </>
  );
};

export default ItemQuantitySelector;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border: 1px solid rgb(15, 12, 21);
  padding: 0.2em 0;
`;
const CardTextBody = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
