import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import { getProducto } from "../funciones/funciones";
import { db } from "../../firebase/FireBase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  // console.log(productos);
  const { id } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    const q = id
      ? query(productsCollection, where("category", "==", id))
      : productsCollection;
    getDocs(q)
      .then((data) => {
        const lista = data.docs.map((product) => {
         
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setListProducts(lista);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <H1>{greeting}</H1>
      <ContainerGral>
        {loading ? (
          <Spinner />
        ) : error ? (
          <h2>Ocurrio un Error</h2>
        ) : (
          <ItemList listProductos={listProducts} />
        )}
      </ContainerGral>
    </>
  );
};

export default ItemListContainer;
const ContainerGral = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 auto;
   padding-top: 30px;

   margin-botton: 60%;
`;
const H1 = styled.h1`
  // border: 1px solid red;
  margin: 0 auto;
  width: 10%;
  color: black;
  padding-top: 200px;
`;
const Spinner = styled.div`
  border: 16px solid pink;
  border-top: 16px deeppink solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 10s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
