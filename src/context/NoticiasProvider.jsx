import axios from 'axios'
import React,{ useState, useEffect, createContext} from 'react'



 
const NoticiasContext = createContext()


const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState('General')
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [totalnoticias, setTotalnoticias] = useState(0)
    
    const [adelante, setAdelante] = useState(1)
     
    const handleChangeCategoria = (e) =>{
            setCategoria(e.target.value)
    }

    const handleAdelante = () => {
       
      setAdelante( adelante + 1)
      
    }

     console.log(totalnoticias);

    useEffect(() => {
      const consultarApi =async () =>{
        
            const url = `https://newsapi.org/v2/top-headlines?country=co&pageSize=10&page=${adelante}&category=${categoria}&apiKey=3f67b8033c414a5498a61c57ee1d1fc7`

            const {data} = await axios(url);
            setNoticias(data.articles);
            setTotalnoticias(data.totalResults)

      }
      consultarApi()
    }, [categoria, adelante])
    


  return (
     <NoticiasContext.Provider value={{
        categoria,handleChangeCategoria, noticias, totalnoticias, handleAdelante
     }}>

            {children}
     </NoticiasContext.Provider>
  )
}

export {
    NoticiasProvider
}

export default NoticiasContext  