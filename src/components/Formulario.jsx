import React from "react";
import { CATEGORIAS } from "../constants";
import useNoticas from "../hooks/useNoticas";

const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticas();

  return (
    <div className="contenedor">
      <div className="formulario">
        <label>
          <h2>Categorias</h2>
        </label>
        <select
          onChange={handleChangeCategoria}
          value={categoria}
          className="formulario-select"
        >
          
          {CATEGORIAS.map((data) => (
            <option key={data.id} value={data.value}>
              {data.label}
            </option>
          ))}
        </select>

        
      </div>
    </div>
  );
};

export default Formulario;
