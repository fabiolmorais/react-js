{/* Aula 2 do Módulo 3 do curso React da b7web (Estilizando inline dinamicamente)  */}
import { useState } from "react";

const App = () => {
  
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: clicked ? 'blue' : 'red',
          color: 'white',
          border: '0'
        }}>Clique Aqui</button>
    </div>
  );
}

export default App;
