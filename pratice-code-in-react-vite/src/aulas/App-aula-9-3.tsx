{/* Aula 9 do Módulo 3 do curso React da b7web (Responsividade com Styled)  */}
import * as C from '../styled-components/AppStylesAula-9-3'

const App = () => {
  

  return (
    <C.Container bgColor='purple' >
      <span>Texto do componente.</span>
      <a href="" className='link'>Link qualquer</a>

      <C.Botao bg='red' >Botão grande</C.Botao>
      <C.Botao bg='green' small >Botão pequeno</C.Botao>
    </C.Container>
  );
}

export default App;
