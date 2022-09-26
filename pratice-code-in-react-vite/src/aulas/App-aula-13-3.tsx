{/* Aula 13 do Módulo 3 do curso React da b7web (Responsividade no TailwindCSS)  */}


const App = () => {
  

  return (
    <div className="bg-black text-white p-7 text-2xl font-bold flex flex-col text-center md:flex-row md:justify-between md:items-center">
      Texto Qualquer aqui

      <button className="bg-green-300 text-black p-2 rounded-xl mt-3 md:ml-3 md:mt-0" >Clique aqui</button>
    </div>
  );
}

export default App;
