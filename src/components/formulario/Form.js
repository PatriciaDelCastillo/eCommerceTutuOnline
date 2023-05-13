import React, { Fragment } from "react";

const Form = ({
  nombre,
  apellido,
  email,
  phone,
  datosNombre,
  datosApellido,
  datosEmail,
  datosPhone,
}) => {
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Nombre"
            onChange={(event) => datosNombre(event.target.value)}
            value={nombre}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Apellido"
            onChange={(event) => datosApellido(event.target.value)}
            value={apellido}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => datosEmail(event.target.value)}
            value={email}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Phone"
            onChange={(event) => datosPhone(event.target.value)}
            value={phone}
          ></input>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
