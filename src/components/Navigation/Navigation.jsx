import React, { useState } from 'react'; // 👈 Importe useState
import { Link } from 'react-router-dom'; 
import { NavBarStyle } from './styles'; 

function Navigation(){
    // 1. Defina o estado para controlar se o menu está aberto/fechado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Defina a função openNav para alternar o estado
    const openNav = () => {
        // Altera o valor atual para o oposto (true vira false, e vice-versa)
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        // Use o estado 'isMenuOpen' para aplicar uma classe condicional se precisar de CSS
        <NavBarStyle id="navigation" className={`navigation ${isMenuOpen ? 'responsive' : ''}`}
        >
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/PortifolioPage">Portfólio</Link></li>
                <li><Link to="/Curriculo">Currículo</Link></li>
                <li><Link to="/ContactPage">Contato</Link></li>
                
                {/* O onClick agora chama a função openNav que está definida */}
                <li 
                    id="threeline-icon" 
                    className="threeline-icon" 
                    onClick={openNav}
                >
                    &#9776;
                </li>
            </ul>
        </NavBarStyle>
    )
}

export default Navigation;