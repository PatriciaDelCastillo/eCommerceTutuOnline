import React from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import ItemListContainer from "./components/productos/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetalleContainer from "./components/productos/ItemDetalleContainer";

import CartDetalle from "./cart/CartDetalle";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return (
    <>
      <CartContextProvider>
        <Container>
          <Header />
          <NavBar />
        </Container>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Productos"} />}
          />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetalleContainer />} />
          
          <Route path="/cart" element={<CartDetalle greeting={"Carrito"} />} />
          <Route path="*" element={<h2>Eror 404, Volvamos...</h2>} />
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
`;
