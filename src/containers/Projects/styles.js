import styled from 'styled-components'

export const ProjectsStyle = styled.section`
  font-family:
    gt,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  /* ===== PARTE SUPERIOR ===== */
  .projects-top {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 80px;
  }

  .projects-top h1 {
    font-size: 36px;
    letter-spacing: 4px;
  }

  .underline {
    display: block;
    width: 40px;
    height: 4px;
    background: #7b4ae2;
    margin: 12px auto 20px;
    border-radius: 4px;
  }

  .projects-top p {
    color: #555;
    line-height: 1.6;
  }

  /* ===== PARTE Projetos ===== */

  .main {
    color: white;
    padding: 80px 180px 80px 100px;

    animation-name: conteudo; /* camada para animacao*/
    animation-duration: 2s;
  }
  .main h1 {
    color: black;
    font-weight: normal;
  }

  .miniatura {
    max-width: 100%;
    background-size: auto 100%;
  }

  .blackbox {
    opacity: 0.8;
  }
  .miniatura {
    width: 320px;
    height: 320px;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
    background-size: contain; /* estica o imagem para caber no elemente*/
    overflow: hidden; /*esconde a sobra da area*/
  }

  .miniatura a {
    text-decoration: none; /* tira sublinha padrao do link*/
  }

  .blackbox {
    /* efeito escurece a imagem */
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    padding-top: 100px;
    transition: 1s; /* tempoda transicao */
  }

  .blackbox:hover {
    /* efeito escurece a imagem */
    opacity: 0.8;
    transition: 1s;
  }

  .blackbox-text {
    text-align: center;
  }

  .blackbox-text h1 {
    font-size: 16px;
    color: #cb958e;
    text-transform: uppercase;
    margin-top: 0px;
  }

  .blackbox-text h2 {
    text-transform: none;
    font-weight: 10;
    margin-top: 0;
  }
  /* ===== RESPONSIVO ===== */
  @media (max-width: 900px) {
    .projects-container {
      grid-template-columns: 1fr;
      padding: 40px 20px;
    }
  }
`
