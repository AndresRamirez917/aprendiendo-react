import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Context/Contexto";

const Login = () => {
  const { logueado, setReferencia } = useContext(Contexto);
  const navegacion = useNavigate();
  const loginn = () => {
    logueado("andres");
    navegacion('/', { replace: true });
  };

  const registro = (e) => {
    setReferencia(e.currentTarget.value);
  };
  return (
    <Fragment>
      <section className="login">
        <h1>Vive el país</h1>
        <label htmlFor="referencia">Referencia:</label>
        <input
          id="referencia"
          onChange={registro}
          placeholder="Referencia de tu billete"
          autoFocus
          autoComplete="off"
        />
        <button className="registro" onClick={loginn}>
          Login
        </button>
      </section>
    </Fragment>
  );
};

export default Login;
