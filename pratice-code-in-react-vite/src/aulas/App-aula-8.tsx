{/* Aula 8 do Módulo 2 do curso React da b7web (Renderizando conteúdo condicional)  */}
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show &&
        <div>
          Texto qualquer...
        </div>
      }
    </div>
  );
}

export default App;
