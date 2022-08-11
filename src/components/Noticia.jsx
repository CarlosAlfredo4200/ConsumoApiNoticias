import React from "react";

const Noticia = ({ ntc }) => {
  const { id, title, img,desarrollado,genero,ulrPlay, descripcion } = ntc;
  return (
    <div className="noticia-card">
      <img className="noticia-imagen" src={img} alt="img" />

       
      <span className="span">Nombre del juego:</span>
      <h2 className="noticia-titulo"> {title}</h2>
      <p className="noticia-descripcion"><span className="span">Desarrollador:</span> {desarrollado}</p>
      <p className="noticia-descripcion"><span className="span">Genero:</span> {genero}</p>
      <p className="noticia-descripcion"><span className="span">Descripción:</span> {descripcion}</p>
      <a  className="a" href={ulrPlay} target="_blank">
        <p className="enlaces">Leer mas...</p>
      </a>
    </div>
  );
};

export default Noticia;

 