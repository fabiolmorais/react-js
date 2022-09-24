{/* Aula 6 do Módulo 2 do curso React da b7web (Comunicação entre componentes)  */}
import {Botao} from '../components/Botao';

const App = () => {
  let textoDoBotao = 'Clicar no botão';

  const botaoEventAction = (txt: string) => {
    alert("Frase do App: " +txt)
  }

  return (
    <div>
      <Botao text={textoDoBotao} clickFn={botaoEventAction} />
    </div>
  );
}

export default App;
