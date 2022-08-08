import React from "react";

import { CATEGORIAS } from "../constants";

const Formulario = () => {
  return (
    <div className="contenedor">
      <div className="formulario">
        <label>
          <h2>Categorias</h2>
        </label>
        <select className="formulario-select">
          <option value=""> Selecciona la categoria </option>
          {CATEGORIAS.map((data) => (
            <option
              key={data.id}
              value={data.value}
            >{data.label}</option>
          ))}
        </select>

        <button className="formulario-btn">Buscar noticia</button>
      </div>
    </div>
  );
};

export default Formulario;
