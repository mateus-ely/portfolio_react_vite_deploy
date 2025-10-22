import React from 'react';

// Recebe props (imagem, link, titulo, realizacao)
function PortfolioItem({ imgUrl, link, titulo, realizacao }) {
  const itemStyle = {
    // A URL da imagem deve ser resolvida corretamente no seu projeto React
    backgroundImage: `url(${imgUrl})`, 
  };

  return (
    <div style={itemStyle} className="miniatura">
      <a href={link}>
        <div className="blackbox">
          <div className="blackbox-text">
            <h1>{titulo}</h1>
            <h2>{realizacao}</h2>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;