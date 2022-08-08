import React from "react";

import { CATEGORIAS } from "../constants";

const Formulario = () => {
  return (
    <div className="contenedor">
      <div className="formulario">
        <label>
          <h3 >Categorias</h3>
        </label>
        <select className="formulario-select">
          <option value=""> Selecciona la Marca </option>
          {CATEGORIAS.map((data) => (
            <option
              key={data.id}
              value={data.value}
            >{data.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Formulario;
