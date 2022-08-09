import React from 'react'
import useNoticas from '../hooks/useNoticas'

import Noticia from './Noticia';

const ListadoNoticias = () => {
   

    const { noticias, handleAdelante, handleAtras} = useNoticas();

    

  return (
    <div> 
        <div><h1>Ultimas noticias</h1></div>
        <div className='contenedor conenedor-noticias'> 
           {
            noticias.map((ntc) =>(
              <Noticia key={ntc.url} ntc={ntc}/>
            ))
           }
        </div>

        <div className='paginacion'>
         
          <button className='pag-btn'   onClick={handleAtras}>Atras</button>
          <button className='pag-btn'   onClick={handleAdelante}>Adelante</button>
           
        </div>
    </div>
  )
}

export default ListadoNoticias