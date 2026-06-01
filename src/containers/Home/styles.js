import styled from "styled-components";

export const HomeStyle = styled.section`
 font-family: gt, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: 50px;
  padding-right: 50px;
  /* Exemplo de aplicação no título do Hero */

  .home-title {
    font-family: 'Tan-Pearl', serif;
    font-size: 2rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .home-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 80px 120px;
  }

  .home-left h2,
  .home-right h2 {
    margin-bottom: 24px;
  }

  .home-left p {
   font-weight: 400;
   line-height: 1.8;
   color: #444;
  }
  
  .home-right{
    padding-left: 200px;
  }
   /* ===== Imagem ===== */

 .home__logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .home__logo-img-cont {
    width: 400px;
    height: 400px;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
  }

  .home__logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* ===== RESPONSIVO ===== */
  @media (max-width: 900px) {
    .home-hero {
      grid-template-columns: 1fr;
      padding: 40px 20px;
      text-align: center;
    }

    .hero-title {
      font-size: 3rem;
    }
  }
`;