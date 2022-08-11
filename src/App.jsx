import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";


function App() {
  return (
    <NoticiasProvider>
      <div>
        <h2 className="title">MEJORES JUEGOS DEL MOMENTO</h2>
        
        <Formulario />
      </div>
      <ListadoNoticias />
    </NoticiasProvider>
  );
}

export default App;
