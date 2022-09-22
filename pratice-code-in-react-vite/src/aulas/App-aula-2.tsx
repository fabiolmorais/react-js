{/* Aula 2 do Módulo 2 do curso React da b7web (Usando o State)  */}
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('Fábio');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      Nome:
      <input type="text" value={name} onChange={handleInput} />
      <hr />
      Seu nome é: {name}
    </div>
  );
}

export default App;
