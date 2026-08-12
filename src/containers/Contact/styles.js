import styled from "styled-components";

export const ContactStyle = styled.section`
    font-family: gt, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   min-height: 1200px;
  /* ===== PARTE SUPERIOR ===== */
  .contact-top {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 80px;
  }

  .contact-top h1 {
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

 /* =====  ===== */
 .contact-container {
    display: flex;
    justify-content: center; /* Alinha horizontalmente no centro */
    align-items: center;     /* Alinha verticalmente no centro */
    gap: 3rem;               /* Espaço generoso entre os ícones */
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  /* Estilização individual dos links/ícones */
  .contact-container a {
    text-decoration: none;
    transition: transform 0.3s ease;
  }
 .contact-left h2,
  .contact-right h2 {
    margin-bottom: 24px;
  }
  /* Estilização individual dos links/ícones */
  .contact-container a {
    text-decoration: none;
    transition: transform 0.3s ease;
  }
  .contact-container a:hover {
    transform: translateY(-10px); /* Efeito de flutuar ao passar o mouse */
  }
  .contact-left p {
    font-weight: 400;
    line-height: 1.8;
    color: #444;
  }
.contact-container img {
    width: 200px;  /* Ajuste o tamanho conforme necessário */
    height: 200px;
    object-fit: contain;
  }

  /* ===== RESPONSIVO (Mobile) ===== */
  @media (max-width: 900px) {
    .contact-container {
      flex-direction: column; /* Empilha os ícones verticalmente no celular */
      gap: 2rem;
      padding: 20px;
    }

    .contact-top h1 {
      font-size: 28px;
    }
  }
`;