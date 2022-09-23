{/* Aula 7 do Módulo 2 do curso React da b7web (Renderizando listas)  */}
type Props = {
  data: {
    name: string;
    age: number;
  }
}

export const Pessoa = ({ data }: Props) => {

  return (
    <li>
      {data.name} - {data.age} anos.
    </li>
  )
}