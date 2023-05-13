import React, { useState } from "react";
// import Form from "../components/formulario/Form";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../firebase/FireBase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import "./cart.css";
import {AiFillDelete} from 'react-icons/ai'
import { Table } from "react-bootstrap";

const CartDetalle = () => {
  const { carrito, borrar, reset, totalPrecio } = useCartContext();
  // const [datosNombre, setDatosNombre] = useState("");
  // const [datosApellido, setDatosApellido] = useState("");
  // const [datosEmail, setDatosEmail] = useState("");
  // const [datosPhone, setDatosPhone] = useState("");

  // const comprador = {
  //   name: datosNombre,
  //   apellido: datosApellido,
  //   phone: datosPhone,
  //   email: datosEmail,
  // };

  const finalizarCompra = () => {
    const ventaCollection = collection(db, "orders");
    addDoc(ventaCollection, {
      // comprador,
      items: carrito,
      date: serverTimestamp(),
      total: totalPrecio(),
    }).then((result) => {
      console.log(result.id);
      carrito.forEach((item) => {
        actualizarStock(item.id, item.cantidad);
      });
      reset();
    });
  };

  const actualizarStock = (id, ventaStock) => {
    const updateStock = doc(db, "products", id);
    getDoc(updateStock).then((res) => {
      //console.log(res);
      const nuevoStock = res.data().stock - ventaStock;
      //console.log(nuevoStock);
      updateDoc(updateStock, { stock: nuevoStock });
    });
  };
  return (
    <>
      <div className="cartDetalle">
        {carrito.map((prod) => (
          <div key={prod.id}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Imagene</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio $</th>
                  <th>Sub-Total</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img className="img" src={prod.image} alt="img" />
                  </td>
                  <td>{prod.title}</td>
                  <td>{prod.cantidad}</td>
                  <td>{prod.price}</td>
                  <td>{totalPrecio()}</td>
                  <tr>
                    <td><button onClick={() => borrar(prod.id)}><AiFillDelete/></button></td>
                  </tr>
                  <td>
                    {" "}
                    <button onClick={reset}></button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div>
              
            </div>

            {/* <Form
              nombre={datosNombre}
              apellido={datosApellido}
              email={datosEmail}
              phone={datosPhone}
              datosNombre={setDatosNombre}
              datosApellido={setDatosApellido}
              datosEmail={setDatosEmail}
              datosPhone={setDatosPhone}
            /> */}
          </div>
        ))}
      </div>

      {carrito.length === 0 ? (
        <p>
          Tu carrito esta vacío<Link to="/"> aca</Link>
        </p>
      ) : (
        <>
          {/* <p className="price">Precio Total: ${totalPrecio()}</p> */}
          {/* <button onClick={reset}>Vaciar carrito</button> */}
           <button onClick={finalizarCompra}>Finalizar la Compra</button> 
        </>
      )}
    </>
  );
};

export default CartDetalle;
