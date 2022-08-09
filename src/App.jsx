import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";


function App() {
  return (
    <NoticiasProvider>
      <div>
        <h1>Buscador de Noticias</h1>
        <Formulario />
      </div>
      <ListadoNoticias />
    </NoticiasProvider>
  );
}

export default App;
