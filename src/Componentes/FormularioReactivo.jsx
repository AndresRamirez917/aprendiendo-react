import React from "react";
import { useState } from "react";

const FormularioReactivo = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    validaInputs()
    console.log(datos);
  };

  const validaInputs = () => {
    // return datos.nombre.length > 0 && datos.apellido.length > 0
    datos.nombre.length && datos.apellido.length > 0
      ? alert(
          `Usted ingresó Nombre: ${datos.nombre} y Apellido: ${datos.apellido}`
        )
      : alert("Datos incorrectos, los campos no pueden estar vacíos");
  };
  return (
    <div className="container mt-4 mb-4 text text-warning">
      <React.Fragment>
        <h1>Formulario Reactivo</h1>
        <p>
          Formulario reactivo que funciona igual con un useState, los inputs
          deben de tener una propiedad llamada onChange a la que le asignamos
          una función para que acceda a los datos del objeto y con el setDatos
          se acceda a los datos que se ingresen en los inputs, como regla los
          inputs deben de tener una propiedad name que debe de tener el mismo
          nombre que los elementos del objeto. El form debe de tener la
          propiedad onSubmit a la que le asignamos una función y realizará una
          acción programada por nosotros, la validación se hizo de forma
          sencilla con un operador ternario.
        </p>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control col-md-3"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              className="btn btn-warning mt-2"
              type="submit"
            //   onClick={validaInputs}
            >
              Enviar
            </button>
          </div>
        </form>
      </React.Fragment>
    </div>
  );
};

export default FormularioReactivo;
