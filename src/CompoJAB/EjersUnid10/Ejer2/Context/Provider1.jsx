import React, { useContext, useReducer, useState } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer";
import types from "./Types";
import miReducer2 from "./miReducer2";

const init = () => {
  const user = localStorage.getItem("valor");
  return {
    logueado: !!user,
    usuario: user,
  };
};

const valorInicial = [];
const Provider1 = ({ children }) => {
  const [autenticacion, dispatch] = useReducer(miReducer, {}, init);
  const [contratacion, dispatch2] = useReducer(miReducer2, valorInicial);
  const [referencia, setReferencia] = useState("");
  const [sumaTotal, setSumaTotal] = useState(0);

  const logueado = (user = "") => {
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("valor", user);
    dispatch(action);
  };

  const desloguearme = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    localStorage.removeItem("valor");
    dispatch(action);
  };

  return (
    <Contexto.Provider
      value={{
        contratacion,
        dispatch2,
        ...autenticacion,
        logueado,
        desloguearme,
        referencia,
        setReferencia,
        sumaTotal,
        setSumaTotal
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export default Provider1;
