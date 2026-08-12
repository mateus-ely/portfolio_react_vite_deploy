import { createGlobalStyle } from "styled-components";
import bg from "./assets/backgrounds/backgroundA1.jpg";

const myGlobalStyles = createGlobalStyle`
  /* A LINHA DO @IMPORT FOI REMOVIDA DAQUI */
  
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  display: block;
  font-family: gt, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-feature-settings: "liga";
  font-size: 22px;
  line-height: 35.2px;
  margin-top: 31.6571px;
  margin-bottom: 0px;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  max-width: 768px;

  * {
    margin: 0;
    box-sizing: border-box; /* Movi para cá para aplicar em tudo */
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  }

  body {
    background-color: #ffffff;
    font-family: 'Poppins', sans-serif; /* Agora ele usa o que está no index.html */
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
`;

export default myGlobalStyles;