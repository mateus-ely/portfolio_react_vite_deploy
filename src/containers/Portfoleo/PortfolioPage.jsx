
import Navigation from '../../components/Navigation/Navigation'
import { Link } from "react-router-dom";
import React from 'react';
import PortfolioItem from './PortfolioItem';

// Dados simulados do portfólio (idealmente viria de uma API ou JSON)
const portfolioData = [
  { id: 1, img: 'img/ccb.jpg', link: 'webdesign-ccb.html', title: 'titulo trabalho 1', realization: 'realizacao 1' },
  { id: 2, img: 'img/ccb.jpg', link: 'webdesign-ccb.html', title: 'titulo trabalho 2', realization: 'realizacao 2' },
  { id: 3, img: 'img/ccb.jpg', link: 'webdesign-ccb.html', title: 'titulo trabalho 3', realization: 'realizacao 3' },
];

function PortfolioPage() {
  return (
    <>
      <Navigation />
    <div class="main">
  
     <ul className="caminho">
				    <li>
    				<Link to="/">Home</Link>
 					 </li>
					<li> &nbsp;&gt;&nbsp; </li>
					<li> Portfólio </li>
				</ul>

      <h1>Portfolio</h1>

      {/* Renderização da Lista de Itens */}
      {portfolioData.map((item) => (
        <PortfolioItem 
          key={item.id} // Chave única é OBRIGATÓRIA ao mapear listas
          imgUrl={item.img}
          link={item.link}
          titulo={item.title}
          realizacao={item.realization}
        />
      ))}
      
      {/* A tag <br> geralmente é evitada no React e substituída por CSS (margem) */}
      <br /> 
      
      {/* Correção do HTML: a tag de fechamento estava incorreta (<a> em vez de </a>) */}
      <a className="back-link" href="/">
        &larr; Voltar ao início
      </a>
      </div>
    </>
  );
}

export default PortfolioPage;