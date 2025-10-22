import styled from "styled-components";

export const Title = styled.div`
  display: inline-block; /* mantém o comportamento anterior */
  vertical-align: top;
  width: 60%;
  color: white;
  animation-name: profile-capa;
  animation-duration: 5s;
  text-align: left;

  h1 {
    text-transform: uppercase;
    font-size: 58px;
    margin-top: 200px;
    font-weight: 400;
    font-family: "Caladea", serif;
    line-height: 1.1; /* melhora o espaçamento interno */
  }

  span {
    color: #b2596c;
  }

  h2 {
    display: block;         /* força ficar em nova linha */
    margin-top: 20px;       /* espaçamento abaixo do nome */
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    max-width: 600px;       /* evita que o texto se espalhe demais */
  }
`;
