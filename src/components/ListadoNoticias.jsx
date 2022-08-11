import React from 'react'
import useNoticas from '../hooks/useNoticas'

import Noticia from './Noticia';

const ListadoNoticias = () => {
   

    const { noticias, handleAdelante, handleAtras, juegosEd} = useNoticas();

    

  return (
    <div> 
        <div><h2 className='title-top'>TOP 10</h2></div>
        <div className='contenedor conenedor-noticias'> 
           {
            juegosEd.map((play) =>(
              <Noticia key={play.id} ntc={play}/>
            ))
           }
        </div>

        
    </div>
  )
}

export default ListadoNoticias