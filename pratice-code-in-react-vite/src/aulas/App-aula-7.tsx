{/* Aula 7 do Módulo 2 do curso React da b7web (Renderizando listas)  */}
import { Pessoa } from "../components/Pessoa";

const App = () => {
  let list = [
    {name: 'Bonieky', age: 90},
    {name: 'João', age: 20},
    {name: 'Fábio', age: 23},
    {name: 'Samanta', age: 50},
    {name: 'Maria', age: 75}
  ];

  return (
    <div>
      <h2>Lista de Presença</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
