import React from "react";

const Noticia = ({ ntc }) => {
  const { urlToImage, url, title, description, source } = ntc;
  return (
    <div className="noticia-card">
      <img className="noticia-imagen" src={urlToImage} alt="img" />
      <h3 className="noticia-titulo">{title}</h3>
      <p className="noticia-descripcion"> {description}</p>
      <a  className="a" href={url} target="_blank">
        <p className="enlaces">Leer mas...</p>
      </a>
    </div>
  );
};

export default Noticia;
