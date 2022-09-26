import styled from "styled-components";

type ContainerProps = {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${ (props) => props.bgColor };
  max-width: 600px;
  margin: auto;
  color: white;
  padding: 20px;
  display: flex;

  span {
    font-weight: bold;
    color: black;
  }

  .link {
    color: #fff;

    &:hover {
      color: #f00;
    }
  }

  @media (max-width: 500px) {
    background-color: green;
    flex-direction: column;
  }
`;

type BotaoProps = {
  bg: string;
  small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${ (props) => props.small ? '15px' : '30px' };
  background-color: ${ (props) => props.bg };
`;