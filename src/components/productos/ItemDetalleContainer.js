import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
// import { getProductoById } from "../funciones/funciones";
import { db } from "../../firebase/FireBase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetalleContainer = ({ greeting }) => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productCollection = collection(db, "products");
    const refDoc = doc(productCollection, id);
    getDoc(refDoc)
      .then((result) => {
        setProducto({
          id: result.id,
          ...result.data(),
        });
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
      <h2>{greeting}</h2>
      <ContainerGral>
        {loading ? (
          <Spinner />
        ) : error ? (
          <h2>Ocurrio un Error</h2>
        ) : (
          <ItemDetalle prod={producto} />
        )}
      </ContainerGral>
    </>
  );
};

export default ItemDetalleContainer;
const ContainerGral = styled.div`
  //border:1px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 70px;
  margin: 200px auto 20px auto;
  width: 1200px;
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
