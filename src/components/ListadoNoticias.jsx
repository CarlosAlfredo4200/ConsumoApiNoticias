import React from 'react'
import useNoticas from '../hooks/useNoticas'

import Noticia from './Noticia';

const ListadoNoticias = () => {
   

    const { noticias, totalnoticias, setPagina, handleAdelante} = useNoticas();

    
    
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

        <div>
         
          <button onClick={handleAdelante}>Adelante</button>
           
        </div>
    </div>
  )
}

export default ListadoNoticias