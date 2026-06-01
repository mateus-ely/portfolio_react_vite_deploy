import styled from 'styled-components'

export const AboutStyle = styled.section`
 font-family: gt, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  
  /* ===== PARTE SUPERIOR ===== */
  .about-top {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 80px;
  }

  .about-top h1 {
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

  .about-top p {
    color: #555;
    line-height: 1.6;
  }

  /* ===== CONTEÚDO PRINCIPAL ===== */
  .about-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 80px 120px;
  }

  .about-left h2,
  .about-right h2 {
    margin-bottom: 24px;
  }

  .about-left p {
    font-weight: 400;
    line-height: 1.8;
    color: #444;
  }

  .about-left a {
    color: #7b4ae2;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-btn {
  margin-top: 24px;
  padding: 14px 32px;
  border: 2px solid transparent; /* já define a borda */
  background: #bea2a241;
  
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.contact-btn:hover {
  border-color: black; /* só muda a cor */
}

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill {
    background: #bea2a241;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* ===== RESPONSIVO ===== */
  @media (max-width: 900px) {
    .about-container {
      grid-template-columns: 1fr;
      padding: 40px 20px;
    }
  }
`
