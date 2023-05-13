import React from 'react'
import Item from "./Item";
const ItemList = ({ listProductos }) => {
  return (
    <>
    {listProductos.map((prod) => (
      <Item
        id={prod.id}
        titulo={prod.title}
        categoria={prod.category}
        img={prod.image}
        descripcion={prod.description}
        precio={prod.price}
        stock={prod.stock}
      />
    ))}
  </>
  )
}

export default ItemList