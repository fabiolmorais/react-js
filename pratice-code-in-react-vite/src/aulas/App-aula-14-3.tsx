{/* Aula 14 do Módulo 3 do curso React da b7web (Hover e estados no TailwindCSS)  */}


const App = () => {
  

  return (
    <div className="bg-blue-300 p-5">
      <input 
      className="outline-none border-transparent bg-white p-3 rounded focus:ring-2 focus:ring-blue-700"
      type="text" 
      placeholder="Digite alguma coisa..."/>

      <button className="ml-2 p-3 bg-blue-400 rounded text-white font-bold hover:bg-blue-500">Clique aqui</button>
    </div>
  );
}

export default App;
