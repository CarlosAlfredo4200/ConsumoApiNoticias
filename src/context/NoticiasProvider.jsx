
import React,{ useState, useEffect, createContext} from 'react'

const NoticiasContext = createContext()


const NoticiasProvider = ({children}) => {
    
    const [categoria, setCategoria] = useState('moba')
    const [juegosEd , setjuegosEd  ] = useState([])
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [totalnoticias, setTotalnoticias] = useState(0)
    
    const [adelante, setAdelante] = useState(1)
    const [atras, setAtras] = useState(1)
     
    const handleChangeCategoria = (e) =>{
           setCategoria(e.target.value)
    }

    const handleAdelante = () => {
      setAdelante( adelante + 1)
    }

    const handleAtras = () => {
      setAdelante( adelante - 1)
    }


    

    useEffect(() => {
      const consultarApi = async () => {

        const limit = 12;
        
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'c6608174c3mshda6343420b8b016p12ef4fjsn257837f03ed8',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
            // const url = `https://newsapi.org/v2/top-headlines?country=co&pageSize=10&page=${adelante}&category=${categoria}&apiKey=3f67b8033c414a5498a61c57ee1d1fc7`
            const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoria}`;
            const data = await fetch(url, options);
            const juegos = await data.json()
            
            const juego = juegos.slice(0, limit).map( play => ({
              id:play.id,
              title:play.title,
              img:play.thumbnail,
              desarrollado:play.developer,
              genero:play.genre,
              descripcion:play.short_description,
              ulrPlay:play.game_url

            }))
            
             setjuegosEd(juego)
            // setNoticias(noti.articles);
            // setTotalnoticias(noti.totalResults)

      }
      consultarApi()
    }, [categoria, adelante])
    


  return (
     <NoticiasContext.Provider value={{
        categoria,handleChangeCategoria, noticias, juegosEd, totalnoticias, handleAdelante, handleAtras
     }}>

            {children}
     </NoticiasContext.Provider>
  )
}

export {
    NoticiasProvider
}

export default NoticiasContext  