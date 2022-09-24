{/* Aula 7 do Módulo 3 do curso React da b7web (Passando props dinâmicas ao Styled)  */}
import * as C from '../styled-components/AppStylesAula-7-3'

const App = () => {
  

  return (
    <C.Container bgColor='purple' >
      Texto do componente.
      <C.Botao bg='red' >Botão grande</C.Botao>
      <C.Botao bg='green' small >Botão pequeno</C.Botao>
    </C.Container>
  );
}

export default App;
