import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, img, categoria, descripcion, precio,stock }) => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardImageContainer>
            <CardImagen src={img} alt={titulo} />
          </CardImageContainer>
          <CardTextWrapper>
            <CardTextTitle>{titulo}</CardTextTitle>
            <CardTextTitle>{categoria}</CardTextTitle>
            <CardTextTitle>Stock: {stock}</CardTextTitle>
            <CardTextBody>Precio: ${precio}</CardTextBody>
          </CardTextWrapper>
          <CardStatWrapper>
            <CardStats>
              <Link className="linkText" to={`/producto/${id}`}>
                Detalle
              </Link>
            </CardStats>
          </CardStatWrapper>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default Item;
const CardContainer = styled.div`
  //border: 1px solid red;
  align-items: center;
  padding: 2rem 1rem;
  margin: 5px auto;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  gap: 3rem 1rem;
  box-sizing: border-box;
  width: 25%;
  height: 25%;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 7px;
  box-shadow: 1px 10px 10px 2px rgba(0, 0, 0, 0.2);
  border: 7px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  &:hover& {
    border: 4px solid #d5e8ec;
  }
  background-color: rgb(255, 255, 255);
`;
const CardImageContainer = styled.div`
  border-radius: 25px;
  background-size: cover;
  margin-top: 5px;
`;
const CardImagen = styled.img`
  width: 210px;
  height: 210px;
  margin: 5px;
  border-radius: 25px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`;
const CardTextWrapper = styled.div`
  margin: 1px;
`;
const CardTextTitle = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
  color: #1a202c;
  font-family: Arial, Helvetica, sans-serif;
`;

const CardTextBody = styled.p`
  //font-size: 2px;
  font-weight: 500;
  textoverflow: ellipsis;
  overflow: hidden;
  height: 100;
`;

const CardStatWrapper = styled.div`
  display: flex;
`;

const CardStats = styled.div`
  background-color: #7cc2f7;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  margin: 8px;
  border-radius: 7%;
`;
