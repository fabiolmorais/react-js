import styled from "styled-components";

type ContainerProps = {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${ (props) => props.bgColor };
  color: white;
  padding: 20px;

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
`;

type BotaoProps = {
  bg: string;
  small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${ (props) => props.small ? '15px' : '30px' };
  background-color: ${ (props) => props.bg };
`;